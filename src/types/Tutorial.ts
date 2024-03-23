export interface Tutorial {
  id: number;
  title: string;
  description: string;
  updatedAt?: string;
  approximatedTime: number;
  steps: TutorialStep[];
  address?: string;
  likes: number;
  createdBy: string;
  toolTags: string[];
}

export interface TutorialStep {
  title: string;
  content: string;
}

export interface ToolTags {
  name: string;
  icon: string;
}
