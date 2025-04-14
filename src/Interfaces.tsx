interface Team{
    conference: Conference;
    division: Division;
    gamesBehind: string;
    league: string;
    loss: Loss;
    season: number;
    streak: number;
    team: TeamDetails;
    tieBreakerPoints: number;
    win: Win;
    winStreak: boolean;
}

interface Conference {
    loss: number;
    name: string;
    rank: number;
    win: number;
}

interface Division {
    gamesBehind: string;
    loss: number;
    name: string;
    rank: number;
    win: number;
}

interface Loss {
    away: number;
    home: number;
    lastTen: number;
    percentage: string;
    total: number;
}

interface TeamDetails {
    code: string;
    id: number;
    logo: string;
    name: string;
    nickname: string;
}

interface Win {
    away: number;
    home: number;
    lastTen: number;
    percentage: string;
    total: number;
}

export default Team;