import { ReactElement, useMemo } from 'react';
import { formatNumber } from '../utils/utils';

export function TargetChip({ twenty30Target }: { twenty30Target: number }): ReactElement {
  const emissionsTarget = useMemo(() => formatNumber(twenty30Target), [twenty30Target]);
  return <div className="button target-chip">{`Your 2030 target is ${emissionsTarget}kg`}</div>;
}
