import { BigInt } from "@graphprotocol/graph-ts"
import {
  MainToken,
  Initialized,
  Pause,
  Unpause,
  Burn,
  Mint,
  MintFinished,
  OwnershipRenounced,
  OwnershipTransferred,
  Freezed,
  Released,
  Approval,
  Transfer
} from "../generated/MainToken/MainToken"
import { _Burn, _Mint, _OwnershipRenounced, _OwnershipTransferred, 
_Freezed, _Released, _Approval, _Transfer } from "../generated/schema"

export function handleInitialized(event: Initialized): void {}

export function handlePause(event: Pause): void {}

export function handleUnpause(event: Unpause): void {}

export function handleBurn(event: Burn): void {
  let entity = _Burn.load(event.params.burner.toHex())

  if (entity == null) {
    entity = new _Burn(event.params.burner.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.burner = event.params.burner
  entity.value = event.params.value
  entity.save()

}

export function handleMint(event: Mint): void {
  let entity = _Mint.load(event.params.to.toHex())

  if (entity == null) {
    entity = new _Mint(event.params.to.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}

export function handleMintFinished(event: MintFinished): void {}

export function handleOwnershipRenounced(event: OwnershipRenounced): void {
  let entity = _OwnershipRenounced.load(event.params.previousOwner.toHex())

  if (entity == null) {
    entity = new _OwnershipRenounced(event.params.previousOwner.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.previousOwner = event.params.previousOwner
  entity.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  let entity = _OwnershipTransferred.load(event.params.previousOwner.toHex())

  if (entity == null) {
    entity = new _OwnershipTransferred(event.params.previousOwner.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleFreezed(event: Freezed): void {
  let entity = _Freezed.load(event.params.to.toHex())

  if (entity == null) {
    entity = new _Freezed(event.params.to.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.to = event.params.to
  entity.release = event.params.release
  entity.amount = event.params.amount
  entity.save()
}

export function handleReleased(event: Released): void {
  let entity = _Released.load(event.params.owner.toHex())

  if (entity == null) {
    entity = new _Released(event.params.owner.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.owner = event.params.owner
  entity.amount = event.params.amount
  entity.save()
}

export function handleApproval(event: Approval): void {
  let entity = _Approval.load(event.params.owner.toHex())

  if (entity == null) {
    entity = new _Approval(event.params.owner.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.save()
}

export function handleTransfer(event: Transfer): void {
  let entity = _Transfer.load(event.params.from.toHex())

  if (entity == null) {
    entity = new _Transfer(event.params.from.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}
