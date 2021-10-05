export class AllSportsApiResponse {
    success: number;
    result: Array<any>;

    constructor (success: number, result: Array<any>) {
        this.success = success;
        this.result = result;
    }
}

export class AllSportsApiTeam {
    
    team_key?: string;
    team_name?: string;
    team_logo?: string;
    players?: Array<AllSportsApiPlayer>;

}

export class AllSportsApiPlayer {

    player_key?: number;
    player_name?: string;
    player_number?: string;
    player_country?: string;
    player_type?: string;
    player_age?: string;
    player_match_played?: string;
    player_goals?: string;
    player_yellow_cards?: string;
    player_red_cards?: string;
    player_image?: string;
    
}