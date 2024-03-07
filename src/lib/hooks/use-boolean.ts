import { useMemo, useState } from 'react';

const useBoolean = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const callbacks = useMemo(
    () => ({
      on: () => setValue(true),
      off: () => setValue(false),
      toggle: () => setValue((prev) => !prev),
    }),
    [],
  );

  return [value, callbacks] as const;
};

export default useBoolean;
