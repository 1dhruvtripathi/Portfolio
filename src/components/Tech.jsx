import React from "react";
import { SectionWrapper } from "../hoc";

const floatStyle = {
  width: "800px",
  maxWidth: "100%",
  height: "auto",
  animation: "float 3.5s ease-in-out infinite"
};

const iconStyle = {
  width: "110px",
  height: "110px",
  margin: "0 32px",
  transition: "transform 0.2s",
  animation: "pulse 1.8s infinite"
};

const leetcodeColor =
  "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png";
const hackerrankColor =
  "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png";

const Tech = () => (
  <section>
    <style>{`
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-24px); }
        100% { transform: translateY(0px); }
      }
      @keyframes pulse {
        0% { transform: scale(1); filter: brightness(1); }
        50% { transform: scale(1.18); filter: brightness(1.2); }
        100% { transform: scale(1); filter: brightness(1); }
      }
      @keyframes iconHover {
        0% { transform: scale(1) rotate(0deg); }
        50% { transform: scale(1.15) rotate(5deg); }
        100% { transform: scale(1.1) rotate(0deg); }
      }
      @keyframes iconClick {
        0% { transform: scale(1.1); }
        50% { transform: scale(0.95); }
        100% { transform: scale(1.1); }
      }
      .tech-icon {
        cursor: pointer;
        transition: all 0.3s ease;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      .tech-icon:hover {
        animation: iconHover 0.6s ease-in-out;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        filter: brightness(1.1);
      }
      .tech-icon:active {
        animation: iconClick 0.2s ease-in-out;
      }
      .coding-handle-icon:hover {
        transform: scale(1.15);
      }
    `}</style>
    <h2 className="text-4xl font-bold text-center mb-6">Skills</h2>
    <div className="flex justify-center">
      <div className="grid grid-cols-7 gap-4 max-w-4xl">
        {/* 1. C */}
        <img src="https://skillicons.dev/icons?i=c&theme=light&size=150" alt="C" className="tech-icon" />
        {/* 2. C++ */}
        <img src="https://skillicons.dev/icons?i=cpp&theme=light&size=150" alt="C++" className="tech-icon" />
        {/* 3. Python */}
        <img src="https://skillicons.dev/icons?i=python&theme=light&size=150" alt="Python" className="tech-icon" />
        {/* 4. Java */}
        <img src="https://skillicons.dev/icons?i=java&theme=light&size=150" alt="Java" className="tech-icon" />
        {/* 5. HTML */}
        <img src="https://skillicons.dev/icons?i=html&theme=light&size=150" alt="HTML" className="tech-icon" />
        {/* 6. CSS */}
        <img src="https://skillicons.dev/icons?i=css&theme=light&size=150" alt="CSS" className="tech-icon" />
        {/* 7. JavaScript */}
        <img src="https://skillicons.dev/icons?i=js&theme=light&size=150" alt="JavaScript" className="tech-icon" />
        
        {/* 8. React */}
        <img src="https://skillicons.dev/icons?i=react&theme=light&size=150" alt="React" className="tech-icon" />
        {/* 9. Node.js */}
        <img src="https://skillicons.dev/icons?i=nodejs&theme=light&size=150" alt="Node.js" className="tech-icon" />
        {/* 10. GitHub */}
        <img src="https://skillicons.dev/icons?i=github&theme=light&size=150" alt="GitHub" className="tech-icon" />
        {/* 11. Git */}
        <img src="https://skillicons.dev/icons?i=git&theme=light&size=150" alt="Git" className="tech-icon" />
        {/* 12. VS Code */}
        <img src="https://skillicons.dev/icons?i=vscode&theme=light&size=150" alt="VS Code" className="tech-icon" />
        {/* 13. Next.js */}
        <img src="https://skillicons.dev/icons?i=nextjs&theme=light&size=150" alt="Next.js" className="tech-icon" />
        {/* 14. TensorFlow */}
        <img src="https://skillicons.dev/icons?i=tensorflow&theme=light&size=150" alt="TensorFlow" className="tech-icon" />
        
        {/* 15. MongoDB */}
        <img src="https://skillicons.dev/icons?i=mongodb&theme=light&size=150" alt="MongoDB" className="tech-icon" />
        {/* 16. AWS */}
        <img src="https://skillicons.dev/icons?i=aws&theme=light&size=150" alt="AWS" className="tech-icon" />
        {/* 17. SQLite */}
        <img src="https://skillicons.dev/icons?i=sqlite&theme=light&size=150" alt="SQLite" className="tech-icon" />
        {/* 18. MySQL */}
        <img src="https://skillicons.dev/icons?i=mysql&theme=light&size=150" alt="MySQL" className="tech-icon" />
        {/* 19. Figma */}
        <img src="https://skillicons.dev/icons?i=figma&theme=light&size=150" alt="Figma" className="tech-icon" />
        
      </div>
    </div>
    {/* Coding Handles Section */}
    <div className="mt-16">
      <h2 className="text-4xl font-bold text-center mb-6">Coding Handles</h2>
      <div className="flex flex-row justify-center items-center gap-10">
        <a href="https://leetcode.com/u/01dhruvtripathi/" target="_blank" rel="noopener noreferrer" title="LeetCode">
          <img
            src={leetcodeColor}
            alt="LeetCode"
            className="coding-handle-icon"
            style={iconStyle}
          />
        </a>
        <a href="https://www.hackerrank.com/it1a__046" target="_blank" rel="noopener noreferrer" title="HackerRank">
          <img
            src={hackerrankColor}
            alt="HackerRank"
            className="coding-handle-icon"
            style={iconStyle}
          />
        </a>
      </div>
    </div>
  </section>
);

export default SectionWrapper(Tech, "codinghandles");
