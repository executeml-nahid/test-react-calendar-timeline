"use client";

import moment from "moment";
import { useState } from "react";
import Timeline, { DateHeader, SidebarHeader, TimelineHeaders } from "react-calendar-timeline";
import "react-calendar-timeline/dist/style.css";
import {
  FaPaintBrush,
  FaMobile,
  FaBolt,
  FaDatabase,
  FaBullseye,
  FaPalette,
  FaCheckCircle,
  FaFlask,
  FaRocket,
  FaBullhorn,
  FaUser,
  FaTasks,
} from "react-icons/fa";
import CustomTimelineItem, { TimelineItem } from "../components/CustomTimelineItem";

const initialStyles = {
  borderRadius: `3rem`,
  paddingLeft: "10px",
};

interface TimelineGroup {
  id: number;
  title: string;
}

const ProjectTimeline = () => {
  const today = moment();

  // Sample groups representing teams
  const groups: TimelineGroup[] = [
    { id: 1, title: "Frontend Team" },
    { id: 2, title: "Backend Team" },
    { id: 3, title: "Design Team" },
    { id: 4, title: "QA Team" },
    { id: 5, title: "DevOps Team" },
    { id: 6, title: "Marketing Team" },
    { id: 7, title: "HR Team" },
    { id: 8, title: "Sales Team" },
    { id: 9, title: "Support Team" },
    { id: 10, title: "Product Team" },
  ];

  const predefinedColors = [
    { background: "#FF5733", text: "white" },
    { background: "#33FF57", text: "black" },
    { background: "#3357FF", text: "white" },
    { background: "#FF33A1", text: "white" },
    { background: "#A133FF", text: "white" },
    { background: "#33FFF5", text: "black" },
    { background: "#F5FF33", text: "black" },
    { background: "#FF8C33", text: "black" },
    { background: "#8C33FF", text: "white" },
    { background: "#33FF8C", text: "black" },
    { background: "#FF3333", text: "white" },
    { background: "#33FF33", text: "black" },
    { background: "#3333FF", text: "white" },
    { background: "#FF33FF", text: "white" },
    { background: "#33FFFF", text: "black" },
  ];

  // Sample items representing tasks/projects with enhanced data
  const itemsWithPredefinedColors: TimelineItem[] = [
    {
      id: 1,
      group: 1,
      title: "Homepage Redesign",
      description:
        "Complete overhaul of the company homepage with modern design principles and improved user experience",
      start_time: today.clone().subtract(2, "day"),
      end_time: today.clone().add(3, "day"),
      progress: 75,
      assignee: "Sarah Johnson",
      icon: FaPaintBrush,
      status: "In Progress",
      itemProps: {
        style: {
          ...initialStyles,
          background: predefinedColors[0 % predefinedColors.length].background,
          color: predefinedColors[0 % predefinedColors.length].text,
        },
      },
    },
    {
      id: 2,
      group: 1,
      title: "Mobile Optimization",
      description: "Optimize website performance and responsiveness for mobile devices across all browsers",
      start_time: today.clone().add(5, "day"),
      end_time: today.clone().add(10, "day"),
      progress: 0,
      assignee: "Mike Chen",
      icon: FaMobile,
      status: "Planned",
      itemProps: {
        style: {
          ...initialStyles,
          background: predefinedColors[1 % predefinedColors.length].background,
          color: predefinedColors[1 % predefinedColors.length].text,
        },
      },
    },
    {
      id: 3,
      group: 2,
      title: "API Development",
      description: "Build RESTful API endpoints with proper authentication, validation, and documentation",
      start_time: today.clone().subtract(1, "day"),
      end_time: today.clone().add(7, "day"),
      progress: 60,
      assignee: "Alex Rodriguez",
      icon: FaBolt,
      status: "Active",
      itemProps: {
        style: {
          ...initialStyles,
          background: predefinedColors[2 % predefinedColors.length].background,
          color: predefinedColors[2 % predefinedColors.length].text,
        },
      },
    },
    {
      id: 4,
      group: 2,
      title: "Database Migration",
      description: "Migrate legacy database to new schema with zero downtime deployment strategy",
      start_time: today.clone().add(8, "day"),
      end_time: today.clone().add(12, "day"),
      progress: 25,
      assignee: "David Kim",
      icon: FaDatabase,
      status: "Planning",
      itemProps: {
        style: {
          ...initialStyles,
          background: predefinedColors[3 % predefinedColors.length].background,
          color: predefinedColors[3 % predefinedColors.length].text,
        },
      },
    },
    {
      id: 5,
      group: 3,
      title: "UI Kit Creation",
      description: "Design and develop reusable UI components library with consistent styling and interactions",
      start_time: today.clone().subtract(3, "day"),
      end_time: today.clone().add(2, "day"),
      progress: 90,
      assignee: "Emma Wilson",
      icon: FaBullseye,
      status: "Review",
      itemProps: {
        style: {
          ...initialStyles,
          background: predefinedColors[4 % predefinedColors.length].background,
          color: predefinedColors[4 % predefinedColors.length].text,
        },
      },
    },
    {
      id: 6,
      group: 3,
      title: "Brand Guidelines",
      description: "Establish comprehensive brand guidelines including colors, typography, and visual identity",
      start_time: today.clone().add(3, "day"),
      end_time: today.clone().add(8, "day"),
      progress: 10,
      assignee: "Lisa Park",
      icon: FaPalette,
      status: "Starting",
      itemProps: {
        style: {
          ...initialStyles,
          background: predefinedColors[5 % predefinedColors.length].background,
          color: predefinedColors[5 % predefinedColors.length].text,
        },
      },
    },
    {
      id: 7,
      group: 4,
      title: "Testing Sprint 1",
      description:
        "Comprehensive testing of homepage redesign including unit tests, integration tests, and user acceptance testing",
      start_time: today.clone().subtract(1, "day"),
      end_time: today.clone().add(4, "day"),
      progress: 100,
      assignee: "James Taylor",
      icon: FaCheckCircle,
      status: "Complete",
      itemProps: {
        style: {
          ...initialStyles,
          background: predefinedColors[6 % predefinedColors.length].background,
          color: predefinedColors[6 % predefinedColors.length].text,
        },
      },
    },
    {
      id: 8,
      group: 4,
      title: "Testing Sprint 2",
      description: "End-to-end testing of mobile optimization and API integration with performance benchmarking",
      start_time: today.clone().add(5, "day"),
      end_time: today.clone().add(11, "day"),
      progress: 5,
      assignee: "Anna Davis",
      icon: FaFlask,
      status: "Prep",
      itemProps: {
        style: {
          ...initialStyles,
          background: predefinedColors[7 % predefinedColors.length].background,
          color: predefinedColors[7 % predefinedColors.length].text,
        },
      },
    },
    {
      id: 9,
      group: 5,
      title: "CI/CD Pipeline Setup",
      description: "Configure automated deployment pipeline with testing and security checks",
      start_time: today.clone().add(1, "day"),
      end_time: today.clone().add(6, "day"),
      progress: 40,
      assignee: "Tom Wilson",
      icon: FaRocket,
      status: "Active",
      itemProps: {
        style: {
          ...initialStyles,
          background: predefinedColors[8 % predefinedColors.length].background,
          color: predefinedColors[8 % predefinedColors.length].text,
        },
      },
    },
    {
      id: 10,
      group: 6,
      title: "Product Launch Campaign",
      description: "Multi-channel marketing campaign for product launch with social media and email marketing",
      start_time: today.clone().add(7, "day"),
      end_time: today.clone().add(14, "day"),
      progress: 15,
      assignee: "Rachel Green",
      icon: FaBullhorn,
      status: "Planning",
      itemProps: {
        style: {
          ...initialStyles,
          background: predefinedColors[9 % predefinedColors.length].background,
          color: predefinedColors[9 % predefinedColors.length].text,
        },
      },
    },
  ];

  const [items, setItems] = useState<TimelineItem[]>(itemsWithPredefinedColors);
  const [visibleTimeStart, setVisibleTimeStart] = useState(today.clone().subtract(5, "day").valueOf());
  const [visibleTimeEnd, setVisibleTimeEnd] = useState(today.clone().add(15, "day").valueOf());

  const handleTimeChange = (
    visibleTimeStart: number,
    visibleTimeEnd: number,
    updateScrollCanvas: (start: number, end: number) => void
  ) => {
    updateScrollCanvas(visibleTimeStart, visibleTimeEnd);
    setVisibleTimeStart(visibleTimeStart);
    setVisibleTimeEnd(visibleTimeEnd);
  };

  const handleItemMove = (itemId: number, dragTime: number, newGroupOrder: number): void => {
    const item = items.find((i) => i.id === itemId);
    if (!item) return;

    const duration = item.end_time.valueOf() - item.start_time.valueOf();
    const updatedItems = items.map((i) =>
      i.id === itemId
        ? {
            ...i,
            start_time: moment(dragTime),
            end_time: moment(dragTime + duration),
            group: groups[newGroupOrder]?.id || i.group,
          }
        : i
    );
    setItems(updatedItems);
  };

  const handleItemResize = (itemId: number, time: number, edge: "left" | "right"): void => {
    const updatedItems = items.map((i) =>
      i.id === itemId
        ? {
            ...i,
            start_time: edge === "left" ? moment(time) : i.start_time,
            end_time: edge === "right" ? moment(time) : i.end_time,
          }
        : i
    );
    setItems(updatedItems);
  };

  const handleCanvasClick = (groupId: number, time: number): void => {
    console.log(`Clicked on group ${groupId} at time ${moment(time).format()}`);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Timeline Container */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 mt-8 overflow-hidden">
          <div className="rct-timeline-wrapper overflow-x-auto overflow-y-auto max-h-[500px]">
            <Timeline
              groups={groups}
              items={items}
              keys={{
                groupIdKey: "id",
                groupTitleKey: "title",
                groupLabelKey: "title",
                groupRightTitleKey: "rightTitle",
                itemIdKey: "id",
                itemTitleKey: "title",
                itemDivTitleKey: "description", // This will show description in tooltip
                itemGroupKey: "group",
                itemTimeStartKey: "start_time",
                itemTimeEndKey: "end_time",
              }}
              visibleTimeStart={visibleTimeStart}
              visibleTimeEnd={visibleTimeEnd}
              onTimeChange={handleTimeChange}
              onItemMove={handleItemMove}
              onItemResize={handleItemResize}
              onCanvasClick={handleCanvasClick}
              lineHeight={60}
              itemHeightRatio={0.75}
              minZoom={60 * 60 * 1000}
              maxZoom={30 * 24 * 60 * 60 * 1000}
              canMove={true}
              canResize={true}
              canChangeGroup={true}
              stackItems={true}
              traditionalZoom={true}
              defaultTimeStart={today.clone().subtract(5, "day").valueOf()}
              defaultTimeEnd={today.clone().add(15, "day").valueOf()}
              timeSteps={{
                second: 1,
                minute: 1,
                hour: 1,
                day: 1,
                month: 1,
                year: 1,
              }}
              itemRenderer={CustomTimelineItem}
            >
              <TimelineHeaders>
                <SidebarHeader>
                  {({ getRootProps }) => (
                    <div
                      {...getRootProps()}
                      className="flex items-center justify-center  dark:bg-slate-700 text-slate-900  bg-black dark:text-white font-semibold text-sm border-b border-slate-200 dark:border-slate-600"
                    >
                      Teams
                    </div>
                  )}
                </SidebarHeader>
                <DateHeader unit="primaryHeader" className="bg-black" />
                <DateHeader unit="day" />

                {/* <DateHeader /> */}
              </TimelineHeaders>
            </Timeline>
          </div>
        </div>

        {/* Legend */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 mt-6">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Timeline Legend</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-1 bg-blue-500 rounded"></div>
              <span className="text-sm text-slate-600 dark:text-slate-300">Progress Bar</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUser className="text-slate-600 dark:text-slate-300" size={16} />
              <span className="text-sm text-slate-600 dark:text-slate-300">Assignee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-xs">Status</div>
              <span className="text-sm text-slate-600 dark:text-slate-300">Task Status</span>
            </div>
            <div className="flex items-center gap-2">
              <FaTasks className="text-slate-600 dark:text-slate-300" size={16} />
              <span className="text-sm text-slate-600 dark:text-slate-300">Task Type Icon</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-600">
            <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-2">Progress Status Colors:</h4>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span className="text-xs text-slate-600 dark:text-slate-300">In Progress</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span className="text-xs text-slate-600 dark:text-slate-300">Complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;
