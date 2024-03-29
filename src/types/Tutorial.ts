import { ReactElement } from "react";
import { IconType } from "react-icons";

export interface PagedTutorialResponse {
    page: number,
    totalPages: number,
    data: Tutorial[]
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  updatedAt: string;
  approximatedTime: number;
  steps: TutorialStep[];
  address: string;
  likes: number;
  toolTags: ToolTags[];
}

export interface TutorialStep {
  title: string;
  content: string;
}

export interface ToolTags {
  name: string;
  icon: IconType;
}
