import cn from "classnames";
import { ComponentProps, FC } from "react";

import { fontStyle } from "../lib/style";
import styles from "../styles/buttons.module.css";

export const PrimaryButton: FC<
  ComponentProps<"button"> & { disabled?: boolean }
> = (props) => {
  const { style, disabled, onClick, ...otherProps } = props;
  return (
    <button
      className={cn(
        styles.buttonBase,
        styles.primaryButton,
        disabled && styles.buttonDisabled
      )}
      style={{
        ...fontStyle(),
        ...style,
      }}
      onClick={(evt) => {
        if (disabled) {
          return;
        }
        if (onClick) {
          onClick(evt);
        }
      }}
      {...otherProps}
    />
  );
};
