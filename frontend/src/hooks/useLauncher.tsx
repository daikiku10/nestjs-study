import { ReactNode, useCallback, useMemo, useState } from "react";

export function useLauncher<LAUNCH_PROPS, DONE_PROPS>(
  render: (options: {
    launchProps: LAUNCH_PROPS;
    done: (props?: DONE_PROPS) => void;
    close: () => void;
  }) => ReactNode
) {
  const [launchProps, setLaunchProps] = useState<LAUNCH_PROPS>();

  const [executor, setExecutor] = useState<{
    resolve: (props?: DONE_PROPS) => void;
    reject: () => void;
  }>();

  const launch = useCallback((props: LAUNCH_PROPS) => {
    setLaunchProps(props);

    return new Promise<DONE_PROPS | undefined>((resolve, reject) => {
      setExecutor({
        resolve,
        reject,
      });
    });
  }, []);

  const done = useCallback(
    (props?: DONE_PROPS) => {
      if (executor) {
        executor.resolve(props);
      }

      setLaunchProps(undefined);
      setExecutor(undefined);
    },
    [executor]
  );

  const close = useCallback(() => {
    if (executor) {
      executor.reject();
    }

    setLaunchProps(undefined);
    setExecutor(undefined);
  }, [executor]);

  const provider = useMemo(() => {
    return (
      launchProps &&
      render({
        launchProps,
        done,
        close,
      })
    );
  }, [launchProps, done, close, render]);

  return {
    launch,
    launchProps,
    done,
    close,
    provider,
  };
}
