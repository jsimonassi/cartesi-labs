import {
	FaPython, FaReact, FaVuejs, FaJs, FaCuttlefish, FaJava, FaGem, FaNodeJs, FaFlask, FaLaravel, FaAngular, FaBootstrap, FaSass, FaLess, FaJenkins, FaCircle
} from "react-icons/fa";
import { SiCsharp, SiSpring, SiTailwindcss } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { ToolTags } from "../../types/Tutorial";

const TAGS: ToolTags[] = [
	{ name: "Python", icon: FaPython  },
	{ name: "React", icon: FaReact  },
	{ name: "Vue", icon: FaVuejs  },
	{ name: "JavaScript", icon: FaJs  },
	{ name: "TypeScript", icon: FaNodeJs  },
	{ name: "C++", icon: FaCuttlefish  },
	{ name: "C#", icon: SiCsharp },
	{ name: "Java", icon: FaJava  },
	{ name: "Ruby", icon: FaGem  },
	{ name: "Node.js", icon: FaNodeJs  },
	{ name: "Django", icon: DiDjango  },
	{ name: "Flask", icon: FaFlask  },
	{ name: "Spring", icon: SiSpring },
	{ name: "Laravel", icon: FaLaravel  },
	{ name: "Angular", icon: FaAngular  },
	{ name: "Tailwind", icon: SiTailwindcss },
	{ name: "Bootstrap", icon: FaBootstrap  },
	{ name: "Sass", icon: FaSass  },
	{ name: "Less", icon: FaLess  },
	{ name: "Jenkins", icon: FaJenkins  },
	{ name: "Circle CI", icon: FaCircle  }
];

export default TAGS;
