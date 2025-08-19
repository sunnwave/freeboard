import { IBoardAddress } from '../commons/types/generated/types';

export function formatAddress(address?: IBoardAddress | null): string {
  if (!address) {
    return '주소 정보가 없습니다.';
  }
  return `${address.address} ${address.addressDetail || ''}`.trim();
}
