"use client";

import React, { FC, ReactNode, useEffect, useState } from "react";
import { X } from "lucide-react";

export interface AlertProps {
  type?: "success" | "error" | "warn" | "neutral" | "primary";
  message: string | ReactNode;
  dismissible?: boolean;
  onClose?: () => void;
  className?: string;
  icon?: ReactNode;
  autoDismissAfter?: number; // milliseconds
}

const typeStyles: Record<NonNullable<AlertProps["type"]>, string> = {
  success: "bg-green-100 text-green-800 border-green-300",
  error: "bg-red-100 text-red-800 border-red-300",
  warn: "bg-yellow-100 text-yellow-800 border-yellow-300",
  neutral: "bg-gray-100 text-gray-800 border-gray-300",
  primary: "bg-blue-100 text-blue-800 border-blue-300",
};

const Alert: FC<AlertProps> = ({
  type = "neutral",
  message,
  dismissible = false,
  onClose,
  className = "",
  icon,
  autoDismissAfter,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (autoDismissAfter) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose?.();
      }, autoDismissAfter);
      return () => clearTimeout(timer);
    }
  }, [autoDismissAfter, onClose]);

  if (!visible) return null;

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={`flex items-start border rounded-lg p-4 gap-2 text-sm ${typeStyles[type]} ${className}`}
    >
      {icon && <div className="pt-1">{icon}</div>}
      <div className="flex-1">{message}</div>
      {dismissible && (
        <button
          className="ml-auto text-inherit"
          onClick={() => {
            setVisible(false);
            onClose?.();
          }}
          aria-label="Close alert"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Alert;
