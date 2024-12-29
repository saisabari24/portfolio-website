import { CommandLine } from "./CommandLine";
import { Terminal } from "./Terminal";

export function GitHubStats() {
  return (
    <Terminal>
      <CommandLine
        command="github stats --user saisabari24"
        output={
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img 
                src="https://github-readme-stats.vercel.app/api?username=saisabari24&show_icons=true&theme=dark&hide_border=true&bg_color=1a1b1e&title_color=60a5fa&icon_color=60a5fa&text_color=9ca3af" 
                alt="GitHub Stats"
                className="w-full rounded-lg"
              />
              <img 
                src="https://github-readme-streak-stats.herokuapp.com/?user=saisabari24&theme=dark&hide_border=true&background=1a1b1e&ring=60a5fa&fire=60a5fa&currStreakLabel=60a5fa" 
                alt="GitHub Streak"
                className="w-full rounded-lg"
              />
            </div>
            <img 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=saisabari24&layout=compact&theme=dark&hide_border=true&bg_color=1a1b1e&title_color=60a5fa&text_color=9ca3af" 
              alt="Top Languages"
              className="w-full md:w-1/2 rounded-lg"
            />
          </div>
        }
      />
    </Terminal>
  );
} 