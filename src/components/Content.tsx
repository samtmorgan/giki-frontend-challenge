import React, { ReactElement } from 'react';
import { Footprint } from './Footprint';
import { EmissionsDisplay } from './EmissionsDisplay';
import { ContentType } from '../types/types';
import { TargetChip } from './TargetChip';

export function Content({ emissions, yearTarget, remainderToCut, twenty30Target }: ContentType): ReactElement {
  return (
    <div className="content">
      <Footprint emissions={emissions} />
      <section className="goals-container">
        <EmissionsDisplay emissions={yearTarget} title={`End of\nyear target`} size="sm" />
        <EmissionsDisplay emissions={remainderToCut} title={`Left to cut\nthis year`} size="sm" />
      </section>
      <TargetChip twenty30Target={twenty30Target} />
    </div>
  );
}
