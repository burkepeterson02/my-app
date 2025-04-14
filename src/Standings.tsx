import { useEffect, useState } from 'react';
import Team from './Interfaces';

const TeamStandings = () => {
  const [standings, setStandings] = useState<string>(''); // Store standings as a single string

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://api-nba-v1.p.rapidapi.com/standings?league=standard&season=2021';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '8ce058848fmsh174c5bdfeda5ec4p15ff62jsn098d9380dcf2',
          'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        const teamsData = result.response.map((item: Team) => {
          const name = item.team.name;
          const wins = item.win.total;
          const losses = item.loss.total;
          const seed = item.conference.rank;
          return `${name}(${seed}): ${wins}-${losses}`;
        }).join('  |  '); // Join all teams into a single string

        setStandings(teamsData); // Set the standings string in state
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData(); // Fetch data when the component mounts
  }, []);

  return (
    <div>
      <div className="scrolling-standings">
        <div className="scrolling-text">
          {standings} {/* Concatenate the standings string twice */}
        </div>
      </div>
    </div>
  );
};

export default TeamStandings;
