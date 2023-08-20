import styles from './styles_player_list.module.scss'

import arrow_total from "../../../public/arrow_total.svg"
import arrow_won_result from "../../../public/arrow_won_result.svg"
import player_top1 from "../../../public/player_top1.png"
import player_top2 from "../../../public/player_top2.png"
import player_top3 from "../../../public/player_top3.png"
import image_account from "../../../public/image_account.svg"
import BNB from '../../../public/BNB.svg'
import arrow_left from "../../../public/arrow_left.svg"
import arrow_right from "../../../public/arrow_right.svg"


const PlayerList = () => {
    return(
        <>
        <div>
            <div className={styles.header_player_mobile}>
                <span>Player List</span>

                <div className={styles.global_settings_mobile}>
                    <a className={styles.active_settings_mobile} href='#'>
                        Monthly
                    </a>

                    <a className={styles.no_active_mobile} href="#">
                        In a year
                    </a>
                </div>
            </div>
        </div>

        <div className={styles.gold_liner}></div>
        <div className={styles.global_container}>
            <div className={styles.header_player}>
                <span>Player List</span>

                <div className={styles.global_settings}>
                    <a className={styles.active_settings} href='#'>
                        Monthly
                    </a>

                    <a className={styles.no_active} href="#">
                        In a year
                    </a>
                </div>
            </div>

            <div className={styles.global_rank}>
                <div className={styles.local_rank}>
                    <div className={styles.tablet}>
                        <div className={styles._block_rank_local}>
                            <div className={styles.header}>
                                <div className={styles.empty}></div>
                                <div>User address</div>
                                <div>Best bet</div>
                                <div>Total bets <img src={arrow_total} alt="" /></div>
                                <div>Won <img src={arrow_won_result} alt="" /></div>
                                <div>Lost</div>
                                <div>Result <img src={arrow_won_result} alt="" /></div>
                                <div></div>
                            </div>
                            
                            <div className={styles.local_block_inform_user}>
                                <div className={styles.basic_inform_top1}>
                                    <div className={styles.block1}>
                                        <p>
                                            <img className={styles.image_top} src={player_top1} alt="" />
                                        </p>
                                        <a href='#' className={styles.account}>
                                            <img src={image_account} alt="" />
                                            <span>0x32f1518....d67ac</span>
                                        </a>
                                    </div>


                                    <div className={styles.block2}>
                                        <div>
                                            <p className={styles.header_mobile_list}>Best bet</p>
                                            <div className={styles.inform_best_bet}>
                                                <img className={styles.bnb_board} src={BNB} alt="" />
                                                <span>3,261.39  / $3,261.39</span>
                                            </div>
                                        </div>
                                        <div>
                                            <p className={styles.header_mobile_list}>Total best</p>
                                            <div className={styles.total_best}>
                                                <span>355</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className={styles.block3}>
                                        
                                        <div className={styles.text_inform_leaderboard}>
                                            <p className={styles.header_mobile_list}>Won</p>
                                            <div>
                                                <span>300</span>
                                            </div>
                                        </div>
                                        
                                        <div className={styles.text_inform_leaderboard}>
                                            <p className={styles.header_mobile_list}>Lost</p>
                                            <div>
                                                <span>55</span>
                                            </div>
                                        </div>

                                        <div className={styles.text_inform_leaderboard}>
                                            <p className={styles.header_mobile_list}>Result</p>
                                            <div className={styles.profit}>
                                                <span>$19,150.21</span>
                                                <div className={styles.interest}>
                                                    <span>+74,5%</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className={styles.basic_inform_top2}>
                                    <div className={styles.block1}>
                                        <p>
                                            <img className={styles.image_top} src={player_top2} alt="" />
                                        </p>
                                        <a href='#' className={styles.account}>
                                            <img src={image_account} alt="" />
                                            <span>0x32f1518....d67ac</span>
                                        </a>
                                    </div>


                                    <div className={styles.block2}>
                                        <div>
                                            <p className={styles.header_mobile_list}>Best bet</p>
                                            <div  className={styles.inform_best_bet}>
                                                <img className={styles.bnb_board} src={BNB} alt="" />
                                                <span>3,261.39  / $3,261.39</span>
                                            </div>
                                        </div>
                                        <div>
                                            <p className={styles.header_mobile_list}>Total best</p>
                                            <div className={styles.total_best}>
                                                <span>355</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className={styles.block3}>
                                        <div className={styles.text_inform_leaderboard}>
                                            <p className={styles.header_mobile_list}>Won</p>
                                            <div>
                                                <span>300</span>
                                            </div>
                                        </div>
                                        
                                        <div className={styles.text_inform_leaderboard}>
                                            <p className={styles.header_mobile_list}>Lost</p>
                                            <div>
                                                <span>55</span>
                                            </div>
                                        </div>

                                        <div className={styles.text_inform_leaderboard}>
                                            <p className={styles.header_mobile_list}>Result</p>
                                            <div className={styles.profit}>
                                                <span>$19,150.21</span>
                                                <div className={styles.interest}>
                                                    <span>+74,5%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.local_block_inform_user}>
                                <div className={styles.basic_inform_top3}>
                                    <div className={styles.block1}>
                                        <p>
                                            <img className={styles.image_top} src={player_top3} alt="" />
                                        </p>
                                        <a href='#' className={styles.account}>
                                            <img src={image_account} alt="" />
                                            <span>0x32f1518....d67ac</span>
                                        </a>
                                    </div>


                                    <div className={styles.block2}>
                                        <div>
                                            <p className={styles.header_mobile_list}>Best bet</p>
                                            <div className={styles.inform_best_bet}>
                                                <img className={styles.bnb_board} src={BNB} alt="" />
                                                <span>3,261.39  / $3,261.39</span>
                                            </div>
                                        </div>
                                        <div>
                                            <p className={styles.header_mobile_list}>Total best</p>
                                            <div className={styles.total_best}>
                                                <span>355</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className={styles.block3}>
                                        <div className={styles.text_inform_leaderboard}>
                                            <p className={styles.header_mobile_list}>Won</p>
                                            <div>
                                                <span>300</span>
                                            </div>
                                        </div>
                                        
                                        <div className={styles.text_inform_leaderboard}>
                                            <p className={styles.header_mobile_list}>Lost</p>
                                            <div>
                                                <span>55</span>
                                            </div>
                                        </div>

                                        <div className={styles.text_inform_leaderboard}>
                                            <p className={styles.header_mobile_list}>Result</p>
                                            <div className={styles.profit}>
                                                <span>$19,150.21</span>
                                                <div className={styles.interest}>
                                                    <span>+74,5%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.basic_inform_you}>
                                    <div className={styles.block1}>
                                        <div className={styles.rank_board_you}>
                                            <span>25</span>
                                            <div className={styles.you}>You</div>
                                        </div>
                                        
                                        <a href='#' className={styles.account}>
                                            <img src={image_account} alt="" />
                                            <span>0x32f1518....d67ac</span>
                                        </a>
                                    </div>


                                    <div className={styles.block2}>
                                        <div>
                                            <span className={styles.header_mobile_list}>Best bet</span>
                                            <div className={styles.inform_best_bet}>
                                                <img className={styles.bnb_board} src={BNB} alt="" />
                                                <span>3,261.39  / $3,261.39</span>
                                            </div>
                                        </div>
                                        <div>
                                            <p className={styles.header_mobile_list}>Total best</p>
                                            <div className={styles.total_best}>
                                                <span>355</span>
                                            </div>
                                        </div>
                                    </div>



                                    <div className={styles.block3}>
                                        <div className={styles.text_inform_leaderboard}>
                                            <span className={styles.header_mobile_list}>Won</span>
                                            <div>
                                                <span>300</span>
                                            </div>
                                        </div>
                                        
                                        <div className={styles.text_inform_leaderboard}>
                                            <span className={styles.header_mobile_list}>Lost</span>
                                            <div>
                                                <span>55</span>
                                            </div>
                                        </div>

                                        <div className={styles.text_inform_leaderboard}>
                                            <span className={styles.header_mobile_list}>Result</span>
                                            <div className={styles.profit}>
                                                <span>$19,150.21</span>
                                                <div className={styles.interest}>
                                                    <span>+74,5%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={styles.local_block_inform_user}>
                                
                                <div className={styles.basic_inform_player}>
                                    <div className={styles.block1}>
                                        <span className={styles.rank_board}>
                                            4
                                        </span>
                                        
                                        <a href='#' className={styles.account}>
                                            <img src={image_account} alt="" />
                                            <span>0x32f1518....d67ac</span>
                                        </a>
                                    </div>


                                    <div className={styles.block2}>
                                        <div>
                                            <span className={styles.header_mobile_list}>Best bet</span>
                                            <div className={styles.inform_best_bet}>
                                                <img className={styles.bnb_board} src={BNB} alt="" />
                                                <span>3,261.39  / $3,261.39</span>
                                            </div>
                                        </div>
                                        <div>
                                            <p className={styles.header_mobile_list}>Total best</p>
                                            <div className={styles.total_best}>
                                                <span>355</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.block3}>
                                        <div className={styles.text_inform_leaderboard}>
                                            <span className={styles.header_mobile_list}>Won</span>
                                            <div>
                                                <span>300</span>
                                            </div>
                                        </div>
                                        
                                        <div className={styles.text_inform_leaderboard}>
                                            <span className={styles.header_mobile_list}>Lost</span>
                                            <div>
                                                <span>55</span>
                                            </div>
                                        </div>

                                        <div className={styles.text_inform_leaderboard}>
                                            <span className={styles.header_mobile_list}>Result</span>
                                            <div className={styles.profit}>
                                                <span>$19,150.21</span>
                                                <div className={styles.interest}>
                                                    <span>+74,5%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.basic_inform_player}>
                                    <div className={styles.block1}>
                                        <span className={styles.rank_board}>
                                            5
                                        </span>
                                        
                                        <a href='#' className={styles.account}>
                                            <img src={image_account} alt="" />
                                            <span>0x32f1518....d67ac</span>
                                        </a>
                                    </div>


                                    <div className={styles.block2}>
                                        <div>
                                            <span className={styles.header_mobile_list}>Best bet</span>
                                            <div className={styles.inform_best_bet}>
                                                <img className={styles.bnb_board} src={BNB} alt="" />
                                                <span>3,261.39  / $3,261.39</span>
                                            </div>
                                        </div>
                                        <div>
                                            <p className={styles.header_mobile_list}>Total best</p>
                                            <div className={styles.total_best}>
                                                <span>355</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.block3}>
                                        <div className={styles.text_inform_leaderboard}>
                                            <span className={styles.header_mobile_list}>Won</span>
                                            <div>
                                                <span>300</span>
                                            </div>
                                        </div>
                                        
                                        <div className={styles.text_inform_leaderboard}>
                                            <span className={styles.header_mobile_list}>Lost</span>
                                            <div>
                                                <span>55</span>
                                            </div>
                                        </div>

                                        <div className={styles.text_inform_leaderboard}>
                                            <span className={styles.header_mobile_list}>Result</span>
                                            <div className={styles.profit}>
                                                <span>$19,150.21</span>
                                                <div className={styles.interest}>
                                                    <span>+74,5%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.local_block_inform_user}>
                                <div className={styles.basic_inform_player}>
                                    <div className={styles.block1}>
                                        <span className={styles.rank_board}>
                                            6
                                        </span>
                                        
                                        <a href='#' className={styles.account}>
                                            <img src={image_account} alt="" />
                                            <span>0x32f1518....d67ac</span>
                                        </a>
                                    </div>


                                    <div className={styles.block2}>
                                        <div>
                                            <span className={styles.header_mobile_list}>Best bet</span>
                                            <div className={styles.inform_best_bet}>
                                                <img className={styles.bnb_board} src={BNB} alt="" />
                                                <span>3,261.39  / $3,261.39</span>
                                            </div>
                                        </div>
                                        <div>
                                            <p className={styles.header_mobile_list}>Total best</p>
                                            <div className={styles.total_best}>
                                                <span>355</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.block3}>
                                        <div className={styles.text_inform_leaderboard}>
                                            <span className={styles.header_mobile_list}>Won</span>
                                            <div>
                                                <span>300</span>
                                            </div>
                                        </div>
                                        
                                        <div className={styles.text_inform_leaderboard}>
                                            <span className={styles.header_mobile_list}>Lost</span>
                                            <div>
                                                <span>55</span>
                                            </div>
                                        </div>

                                        <div className={styles.text_inform_leaderboard}>
                                            <span className={styles.header_mobile_list}>Result</span>
                                            <div className={styles.profit}>
                                                <span>$19,150.21</span>
                                                <div className={styles.interest}>
                                                    <span>+74,5%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.basic_inform_player}>
                                    <div className={styles.block1}>
                                        <span className={styles.rank_board}>
                                            7
                                        </span>
                                        
                                        <a href='#' className={styles.account}>
                                            <img src={image_account} alt="" />
                                            <span>0x32f1518....d67ac</span>
                                        </a>
                                    </div>


                                    <div className={styles.block2}>
                                        <div>
                                            <span className={styles.header_mobile_list}>Best bet</span>
                                            <div className={styles.inform_best_bet}>
                                                <img className={styles.bnb_board} src={BNB} alt="" />
                                                <span>3,261.39  / $3,261.39</span>
                                            </div>
                                        </div>
                                        <div>
                                            <p className={styles.header_mobile_list}>Total best</p>
                                            <div className={styles.total_best}>
                                                <span>355</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.block3}>
                                        <div className={styles.text_inform_leaderboard}>
                                            <span className={styles.header_mobile_list}>Won</span>
                                            <div>
                                                <span>300</span>
                                            </div>
                                        </div>
                                        
                                        <div className={styles.text_inform_leaderboard}>
                                            <span className={styles.header_mobile_list}>Lost</span>
                                            <div>
                                                <span>55</span>
                                            </div>
                                        </div>

                                        <div className={styles.text_inform_leaderboard}>
                                            <span className={styles.header_mobile_list}>Result</span>
                                            <div className={styles.profit}>
                                                <span>$19,150.21</span>
                                                <div className={styles.interest}>
                                                    <span>+74,5%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.local_block_inform_user}>
                                <div className={styles.basic_inform_player}>
                                    <div className={styles.block1}>
                                        <span className={styles.rank_board}>
                                            8
                                        </span>
                                        
                                        <a href='#' className={styles.account}>
                                            <img src={image_account} alt="" />
                                            <span>0x32f1518....d67ac</span>
                                        </a>
                                    </div>


                                    <div className={styles.block2}>
                                        <div>
                                            <span className={styles.header_mobile_list}>Best bet</span>
                                            <div className={styles.inform_best_bet}>
                                                <img className={styles.bnb_board} src={BNB} alt="" />
                                                <span>3,261.39  / $3,261.39</span>
                                            </div>
                                        </div>
                                        <div>
                                            <p className={styles.header_mobile_list}>Total best</p>
                                            <div className={styles.total_best}>
                                                <span>355</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.block3}>
                                        <div className={styles.text_inform_leaderboard}>
                                            <span className={styles.header_mobile_list}>Won</span>
                                            <div>
                                                <span>300</span>
                                            </div>
                                        </div>
                                        
                                        <div className={styles.text_inform_leaderboard}>
                                            <span className={styles.header_mobile_list}>Lost</span>
                                            <div>
                                                <span>55</span>
                                            </div>
                                        </div>

                                        <div className={styles.text_inform_leaderboard}>
                                            <span className={styles.header_mobile_list}>Result</span>
                                            <div className={styles.profit}>
                                                <span>$19,150.21</span>
                                                <div className={styles.interest}>
                                                    <span>+74,5%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.basic_inform_player}>
                                    <div className={styles.block1}>
                                        <span className={styles.rank_board}>
                                            9
                                        </span>
                                        
                                        <a href='#' className={styles.account}>
                                            <img src={image_account} alt="" />
                                            <span>0x32f1518....d67ac</span>
                                        </a>
                                    </div>


                                    <div className={styles.block2}>
                                        <div>
                                            <span className={styles.header_mobile_list}>Best bet</span>
                                            <div className={styles.inform_best_bet}>
                                                <img className={styles.bnb_board} src={BNB} alt="" />
                                                <span>3,261.39  / $3,261.39</span>
                                            </div>
                                        </div>
                                        <div>
                                            <p className={styles.header_mobile_list}>Total best</p>
                                            <div className={styles.total_best}>
                                                <span>355</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.block3}>
                                        <div className={styles.text_inform_leaderboard}>
                                            <span className={styles.header_mobile_list}>Won</span>
                                            <div>
                                                <span>300</span>
                                            </div>
                                        </div>
                                        
                                        <div className={styles.text_inform_leaderboard}>
                                            <span className={styles.header_mobile_list}>Lost</span>
                                            <div>
                                                <span>55</span>
                                            </div>
                                        </div>

                                        <div className={styles.text_inform_leaderboard}>
                                            <span className={styles.header_mobile_list}>Result</span>
                                            <div className={styles.profit}>
                                                <span>$19,150.21</span>
                                                <div className={styles.interest}>
                                                    <span>+74,5%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.basic_inform_player}>
                                <div className={styles.block1}>
                                    <span className={styles.rank_board}>
                                        10
                                    </span>
                                    
                                    <a href='#' className={styles.account}>
                                        <img src={image_account} alt="" />
                                        <span>0x32f1518....d67ac</span>
                                    </a>
                                </div>


                                <div className={styles.block2}>
                                    <div>
                                        <span className={styles.header_mobile_list}>Best bet</span>
                                        <div className={styles.inform_best_bet}>
                                            <img className={styles.bnb_board} src={BNB} alt="" />
                                            <span>3,261.39  / $3,261.39</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className={styles.header_mobile_list}>Total best</p>
                                        <div className={styles.total_best}>
                                            <span>355</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.block3}>
                                    <div className={styles.text_inform_leaderboard}>
                                        <span className={styles.header_mobile_list}>Won</span>
                                        <div>
                                            <span>300</span>
                                        </div>
                                    </div>
                                    
                                    <div className={styles.text_inform_leaderboard}>
                                        <span className={styles.header_mobile_list}>Lost</span>
                                        <div>
                                            <span>55</span>
                                        </div>
                                    </div>

                                    <div className={styles.text_inform_leaderboard}>
                                        <span className={styles.header_mobile_list}>Result</span>
                                        <div className={styles.profit}>
                                            <span>$19,150.21</span>
                                            <div className={styles.interest}>
                                                <span>+74,5%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className={styles.page_switching}>
            <div className={styles.arrow_left}>
                <img src={arrow_left} alt="" />
            </div>
            <div>1</div>
            <div className={styles.active_page}>2</div>
            <div>3</div>
            <div>...</div>
            <div>10</div>
            <div className={styles.arrow_right}>
                <img src={arrow_right} alt="" />
            </div>
        </div>
        </>
    )
}

export default PlayerList