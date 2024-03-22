export interface Tutorial {
    title: string,
    description: string,
    updatedAt: string,
    approximatedTime: number,
    steps: TutorialStep[],
    address: string,
    likes: number,
    createdBy: string,
}

export interface TutorialStep {
    title: string,
    content: string 
}