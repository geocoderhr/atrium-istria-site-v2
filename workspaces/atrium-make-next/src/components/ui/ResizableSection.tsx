import { ReactNode } from "react";
import { Resizable } from "re-resizable";
import { GripVertical } from "lucide-react";

interface ResizableSectionProps {
  children: ReactNode;
  defaultWidth?: string | number;
  defaultHeight?: string | number;
  minWidth?: string | number;
  minHeight?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  enable?: {
    top?: boolean;
    right?: boolean;
    bottom?: boolean;
    left?: boolean;
    topRight?: boolean;
    bottomRight?: boolean;
    bottomLeft?: boolean;
    topLeft?: boolean;
  };
  className?: string;
}

export function ResizableSection({
  children,
  defaultWidth = "100%",
  defaultHeight = "auto",
  minWidth = 300,
  minHeight = 200,
  maxWidth = "100%",
  maxHeight = "none",
  enable = {
    top: false,
    right: true,
    bottom: true,
    left: true,
    topRight: false,
    bottomRight: true,
    bottomLeft: true,
    topLeft: false,
  },
  className = "",
}: ResizableSectionProps) {
  return (
    <Resizable
      defaultSize={{
        width: defaultWidth,
        height: defaultHeight,
      }}
      minWidth={minWidth}
      minHeight={minHeight}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      enable={enable}
      className={`relative ${className}`}
      handleStyles={{
        right: {
          width: "8px",
          right: "-4px",
          cursor: "col-resize",
        },
        left: {
          width: "8px",
          left: "-4px",
          cursor: "col-resize",
        },
        bottom: {
          height: "8px",
          bottom: "-4px",
          cursor: "row-resize",
        },
        bottomRight: {
          width: "20px",
          height: "20px",
          right: "-10px",
          bottom: "-10px",
          cursor: "nwse-resize",
        },
        bottomLeft: {
          width: "20px",
          height: "20px",
          left: "-10px",
          bottom: "-10px",
          cursor: "nesw-resize",
        },
      }}
      handleComponent={{
        right: (
          <div className="absolute right-0 top-0 bottom-0 w-2 flex items-center justify-center group hover:bg-warm-orange/20 transition-colors">
            <div className="w-1 h-12 bg-warm-orange/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ),
        left: (
          <div className="absolute left-0 top-0 bottom-0 w-2 flex items-center justify-center group hover:bg-warm-orange/20 transition-colors">
            <div className="w-1 h-12 bg-warm-orange/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ),
        bottom: (
          <div className="absolute bottom-0 left-0 right-0 h-2 flex items-center justify-center group hover:bg-warm-orange/20 transition-colors">
            <div className="h-1 w-12 bg-warm-orange/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ),
        bottomRight: (
          <div className="absolute bottom-0 right-0 w-5 h-5 flex items-center justify-center group hover:bg-warm-orange/30 transition-colors rounded-full">
            <GripVertical className="w-4 h-4 text-warm-orange opacity-40 group-hover:opacity-100 transition-opacity rotate-45" />
          </div>
        ),
        bottomLeft: (
          <div className="absolute bottom-0 left-0 w-5 h-5 flex items-center justify-center group hover:bg-warm-orange/30 transition-colors rounded-full">
            <GripVertical className="w-4 h-4 text-warm-orange opacity-40 group-hover:opacity-100 transition-opacity -rotate-45" />
          </div>
        ),
      }}
    >
      {children}
    </Resizable>
  );
}
