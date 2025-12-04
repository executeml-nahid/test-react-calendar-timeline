/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from "moment";
import React from "react";
import { IconType } from "react-icons";

// Define types for timeline items
export interface TimelineItem {
  id: number;
  group: number;
  title: string;
  description: string;
  start_time: moment.Moment;
  end_time: moment.Moment;
  progress?: number;
  assignee?: string;
  icon?: IconType;
  status?: string;
  itemProps?: {
    style?: React.CSSProperties;
  };
}

interface CustomTimelineItemProps {
  item: TimelineItem;
  getItemProps: (config: any) => any;
  getResizeProps: () => { left: any; right: any };
}

const CustomTimelineItem = ({ item, getItemProps, getResizeProps }: CustomTimelineItemProps) => {
  const { left: leftResizeProps, right: rightResizeProps } = getResizeProps();

  const itemProps = getItemProps({
    style: {
      ...item.itemProps?.style,
      padding: "8px 12px",
      borderRadius: "8px",
      border: "1px solid rgba(255,255,255,0.2)",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      minHeight: "45px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
      overflow: "hidden",
    },
  });

  const { key, ...restItemProps } = itemProps;

  return (
    <div key={key} {...restItemProps}>
      {leftResizeProps && <div {...leftResizeProps} />}

      {/* Progress bar background */}
      {item.progress !== undefined && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            backgroundColor: "rgba(255,255,255,0.2)",
            borderRadius: "0 0 8px 8px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${item.progress}%`,
              backgroundColor: item.progress >= 100 ? "#10B981" : "#3B82F6",
              borderRadius: "0 0 8px 8px",
              transition: "width 0.3s ease",
            }}
          />
        </div>
      )}

      {/* Main content */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "6px", flex: 1 }}>
        {/* React Icon */}
        {item.icon && (
          <item.icon
            size={14}
            style={{
              color: item.itemProps?.style?.color || "#000",
              marginTop: "1px",
              flexShrink: 0,
            }}
          />
        )}

        {/* Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Title */}
          <div
            style={{
              fontSize: "12px",
              fontWeight: "600",
              lineHeight: "1.2",
              marginBottom: "2px",
              color: item.itemProps?.style?.color || "#000",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {item.title}
          </div>

          {/* Progress percentage */}
          {item.progress !== undefined && (
            <div
              style={{
                fontSize: "10px",
                color: item.itemProps?.style?.color || "#000",
                opacity: 0.8,
                lineHeight: "1.2",
              }}
            >
              {item.progress}% complete
            </div>
          )}

          {/* Assignee */}
          {item.assignee && (
            <div
              style={{
                fontSize: "10px",
                color: item.itemProps?.style?.color || "#000",
                opacity: 0.9,
                lineHeight: "1.2",
                display: "flex",
                alignItems: "center",
                gap: "3px",
              }}
            >
              <span style={{ fontSize: "10px" }}>👤</span>
              <span>{item.assignee}</span>
            </div>
          )}
        </div>

        {/* Status indicator */}
        {item.status && (
          <div
            style={{
              fontSize: "10px",
              padding: "2px 4px",
              borderRadius: "4px",
              backgroundColor: "rgba(255,255,255,0.2)",
              color: item.itemProps?.style?.color || "#000",
              lineHeight: "1",
            }}
          >
            {item.status}
          </div>
        )}
      </div>

      {rightResizeProps && <div {...rightResizeProps} />}
    </div>
  );
};

export default CustomTimelineItem;
