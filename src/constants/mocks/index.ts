import { Tutorial } from "../../types/Tutorial";

const mockTutorials: Tutorial[] = [
	{
		id: 1,
		title: "How to Build a Mock Tutorial",
		description:
      "This tutorial will guide you through creating a mock for a Tutorial object.",
		updatedAt: "2024-03-22T12:00:00Z",
		approximatedTime: 30,
		steps: [
			{
				title: "Step 1: Define Interface",
				content: "Define the Tutorial interface with necessary properties.",
			},
			{
				title: "Step 2: Create Mock Data",
				content: "Create mock data for the Tutorial object.",
			},
			{
				title: "Step 3: Implement Mock",
				content:
          "Use the mock data wherever needed for testing or demonstration purposes.",
			},
		],
		likes: 10,
		createdBy: "John Doe",
		toolTags: ["typescript", "mocking"],
	},
	{
		id: 2,
		title: "How to Use Mock Data",
		description: "Learn how to use mock data effectively in your projects.",
		updatedAt: "2024-03-22T12:00:00Z",
		approximatedTime: 45,
		steps: [
			{
				title: "Step 1: Understand Mock Data",
				content: "Understand the purpose and benefits of using mock data.",
			},
			{
				title: "Step 2: Generate Mocks",
				content:
          "Generate mock data for various scenarios in your application.",
			},
			{
				title: "Step 3: Integrate with Application",
				content:
          "Integrate mock data into your application for testing and development.",
			},
		],
		likes: 8,
		createdBy: "Jane Smith",
		toolTags: ["javascript", "testing"],
	},
];

export default mockTutorials;
