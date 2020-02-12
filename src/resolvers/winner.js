export default {
  Query: {
    winners: async (parent, args, { models }) => {
      return await models.Winner.findAll();
    },
    winner: async (parent, { id }, { models }) => {
      return await models.Winner.findById(id);
    },
    winnersByRace: async (parent, { race_name }, { models }) => {
      return await models.Winner.findAll({
        where: {
          race_name
        }
      });
    }
  },

  Mutation: {
    addWinner: async (
      parent,
      { 
        race_name,
        year,
        horse_name,
        jockey,
        trainer,
        age,
        weight,
        distance,
        time,
        going,
        price,
        rating,
        form,
        runs,
        wins,
        cheltenham_runs,
        cheltenham_wins,
        distance_runs,
        distance_wins,
        hurdles_runs,
        hurdles_wins,
        chase_runs,
        chase_wins,
        last_run,
        since_last_run,
        last_run_result,
        grade_one_wins,
        grade_two_wins,
        grade_three_wins,
        video_url
      },
      { models },
    ) => {
      const winner = await models.Winner.create({
        race_name,
        year,
        horse_name,
        jockey,
        trainer,
        age,
        weight,
        distance,
        time,
        going,
        price,
        rating,
        form,
        runs,
        wins,
        cheltenham_runs,
        cheltenham_wins,
        distance_runs,
        distance_wins,
        hurdles_runs,
        hurdles_wins,
        chase_runs,
        chase_wins,
        last_run,
        since_last_run,
        last_run_result,
        grade_one_wins,
        grade_two_wins,
        grade_three_wins,
        video_url
      });

      return { race_name };
    },
    updateWinner: async (
      parent,
      { 
        id,
        race_name,
        year,
        horse_name,
        jockey,
        trainer,
        age,
        weight,
        distance,
        time,
        going,
        price,
        rating,
        form,
        runs,
        wins,
        cheltenham_runs,
        cheltenham_wins,
        distance_runs,
        distance_wins,
        hurdles_runs,
        hurdles_wins,
        chase_runs,
        chase_wins,
        last_run,
        since_last_run,
        last_run_result,
        grade_one_wins,
        grade_two_wins,
        grade_three_wins,
        video_url
      },
      { models },
    ) => {
      const winner = await models.Winner.findById(id);
      return await winner.update({
        race_name,
        year,
        horse_name,
        jockey,
        trainer,
        age,
        weight,
        distance,
        time,
        going,
        price,
        rating,
        form,
        runs,
        wins,
        cheltenham_runs,
        cheltenham_wins,
        distance_runs,
        distance_wins,
        hurdles_runs,
        hurdles_wins,
        chase_runs,
        chase_wins,
        last_run,
        since_last_run,
        last_run_result,
        grade_one_wins,
        grade_two_wins,
        grade_three_wins,
        video_url
      });
    },
  }
};