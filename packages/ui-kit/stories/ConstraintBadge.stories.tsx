import { ConstraintBadge, MarginBadge } from '../src/components/cpq/MarginBadge';

export const ConstraintStates = () => (
  <div className="flex gap-3">
    <ConstraintBadge severity="ok" count={0} label="All clear" />
    <ConstraintBadge severity="warning" count={2} label="Warnings" />
    <ConstraintBadge severity="error" count={1} label="Blocking" />
  </div>
);

export const MarginStates = () => (
  <div className="flex gap-3">
    <MarginBadge value={10} />
    <MarginBadge value={18} />
    <MarginBadge value={25} />
  </div>
);
