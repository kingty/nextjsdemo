import {
  LayoutDashboard,
  Bot,
  Shirt,
  Wallet,
  NotebookPen,
  ListTodo,
  House,
  type LucideIcon,
} from "lucide-react";

export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "Dashboards",
    items: [
      {
        title: "Overview",
        url: "/dashboard/default",
        icon: LayoutDashboard
      },
      {
        title: "AIChat",
        url: "/dashboard/crm",
        icon: Bot
      }
    ],
  },
  {
    id: 2,
    label: "Functions",
    items: [
      {
        title: "Wardrobe",
        url: "/dashboard/wardrobe",
        icon: Shirt
      },
      {
        title: "Items",
        url: "/dashboard/coming-soon",
        icon: House
      },
      {
        title: "Wallet",
        url: "/dashboard/coming-soon",
        icon: Wallet
      },
      {
        title: "Notes",
        url: "/dashboard/coming-soon",
        icon: NotebookPen
      },
      {
        title: "TodoList",
        url: "/dashboard/coming-soon",
        icon: ListTodo
      }
    ]
  }
];
