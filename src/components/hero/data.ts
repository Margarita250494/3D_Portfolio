import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { HeroInfo } from "../../utils/types";

export const heroInfo:HeroInfo = [
    {
        desc: "I am a motivated Student Frontend Developer with expertise creating user-friendly, responsive web apps with clean,efficient code."
    },
    {
        soc1als:[
            {
                to: "https://github.com/Margarita250494?tab=repositories",
                icon: Github,
                ariaLabel:"github"
            },
            {
                to: "https://www.instagram.com/ritabojko/?next=%2F",
                icon: Instagram,
                ariaLabel:"instagram"
            },
            {
                to: "https://www.linkedin.com/in/margarita-boiko/",
                icon: Linkedin,
                ariaLabel:"linkedin"
            },
            {
                to:"mailto:margo250494@gmail.com",
                icon: Mail,
                ariaLabel:"email"
            }

        ]
    }
]