import { WalletClient, getAddress, isHex } from 'viem'
import { Signer } from './pushSigner.types'
import { Wallet } from '@dynamic-labs/sdk-react-core'
import { chainToNamespace, networkToSolChainId } from '../../constants'
import { hexToBytes } from '@noble/hashes/utils'

/**
 * Converts a signer instance to Push compatible signer
 * @dev - In Future this will be extended for solana / btc etc non evm chain signers too
 */
export class PushSigner {
  static initialize = async (
    signer: Wallet | WalletClient,
    signerType: 'DYNAMIC' | 'WALLETCLIENT' = 'WALLETCLIENT'
  ): Promise<Signer> => {
    if (signerType === 'DYNAMIC') {
      return this.convertDynamicProvider(signer as Wallet)
    } else {
      return this.convertViemWalletClient(signer as WalletClient)
    }
  }

  private static convertViemWalletClient = async (
    walletClient: WalletClient
  ): Promise<Signer> => {
    try {
      const account = walletClient.account
      if (!account) {
        throw new Error('WalletClient Account Undefined')
      }
      const chainId = await walletClient.getChainId()
      const signMessage = async (message: string) => {
        const signature = await walletClient.signMessage({ message, account })
        return hexToBytes(signature.replace('0x', ''))
      }
      return {
        // making sure address are always in checksum format
        account: `eip155:${chainId}:${getAddress(account.address)}`, // viem signers are valid only for evm (eip155) chains
        signMessage,
      }
    } catch (err) {
      throw new Error('Invalid WalletClient')
    }
  }

  private static convertDynamicProvider = async (
    wallet: Wallet
  ): Promise<Signer> => {
    try {
      const namespace = chainToNamespace[wallet.chain]
      if (namespace === undefined) {
        throw new Error('Unsupported Namespace')
      }
      let chainId = await wallet.getNetwork()
      if (namespace === 'solana') {
        chainId = networkToSolChainId[chainId]
      }

      const signMessage = async (message: string) => {
        const signature = await wallet.signMessage(message)
        // hex
        if (isHex(signature)) return hexToBytes(signature.replace('0x', ''))
        // base64 - solana
        else return Buffer.from(signature, 'base64')
      }
      return {
        account: `${namespace}:${chainId}:${wallet.address}`,
        signMessage,
      }
    } catch (err) {
      throw new Error('Invalid Dynamic Provider')
    }
  }
}