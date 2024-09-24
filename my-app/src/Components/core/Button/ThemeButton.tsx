"use client";
import { ButtonProps } from "@/types/module/themuiModule";
import Image from "next/image";
import { CSSProperties, FC, MouseEvent, useRef } from "react";
import { Button, Text } from "theme-ui";

const defaultButtonTextStyle: CSSProperties = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

const squareButtonTextStyle: CSSProperties = {
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  wordBreak: "break-word",
  hyphens: "auto",
};

const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;

  const truncated = text.slice(0, maxLength - 1);
  const lastSpaceIndex = truncated.lastIndexOf(" ");

  if (lastSpaceIndex > 0) {
    return truncated.slice(0, lastSpaceIndex) + "...";
  }

  return truncated + "...";
};

export const ThemeButton: FC<ButtonProps> = ({
  text,
  icon,
  iconRight,
  textVariant,
  isIconOnly,
  onBlur = () => null,
  onClick = () => null,
  toggleFavorite = () => null,
  toggleOnClick = () => null,
  sx,
  disabled = false,
  variant = "primary",
  type,
  className,
  textSx,
  multilineTextSx,
  children,
  isFavoriteIcon = false,
  iconStyles,
  isFavorite = false,
  iconClassName,
  multilineText,
  quantity = 0,
  isSquareButton = false,
  isUpArrow = false,
  isDownArrow = false,
  autoFocus = false,
}) => {
  const baseTextStyle = isSquareButton
    ? squareButtonTextStyle
    : defaultButtonTextStyle;
  const maxTextLength = 50;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current && variant === "iconOnlyBtn") {
      buttonRef.current.blur();
    }
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <Button
      autoFocus={autoFocus}
      type={type}
      onClick={handleClick}
      sx={{ position: "relative", ...sx }}
      variant={variant}
      disabled={disabled}
      className={className}
      onBlur={onBlur}
      ref={buttonRef}
    >
      {icon && (
        <Image
          height={20}
          className={iconClassName}
          width={20}
          style={{ marginRight: isIconOnly ? 0 : 6, ...iconStyles }}
          src={icon}
          alt="Icon"
          onClick={toggleOnClick}
        />
      )}
      {text ? (
        <Text
          variant={textVariant}
          sx={{
            ...baseTextStyle,
            ...textSx,
          }}
        >
          {truncateText(text, maxTextLength)}
        </Text>
      ) : null}
      {children}
      {iconRight && (
        <Image
          height={20}
          width={20}
          style={{ marginLeft: 6 }}
          src={iconRight}
          alt="Icon"
        />
      )}
    </Button>
  );
};
