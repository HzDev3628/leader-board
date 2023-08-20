import PlayerList from '../player list/PlayerList'
import styles from './styles_basic.module.scss'

import Top1 from '../../../public/top1.svg'
import Top2 from '../../../public/top2.svg'
import Top3 from "../../../public/top3.svg"
import BNB from '../../../public/BNB.svg'
import Polygon from "../../../public/Polygon.svg"
import Avalanche from "../../../public/avalanche.svg"
import image_account from "../../../public/image_account.svg"
import play_icon from "../../../public/play_icon.svg"
import bag_money_icon from "../../../public/bag_money_icon.svg"
import Cup from "../../../public/cup.svg"
import search from "../../../public/search_icon.svg"

const Basic = () => {
    return(
        <div className={styles.container}>
            <div className={styles.global_block_header}>
                <div className={styles.block_header}>
                    <p className={styles.header_leaderboard}>Leaderboard</p>
                    <p className={styles.ps_header}>The best players will always be on the leaderboard. 
                        Play and win to become one of the best!
                    </p>

                    <div className={styles.global_input}>
                        <img src={search} alt="search icon" />
                        <p>Serach</p>
                    </div>

                    <div className={styles.global_button_chain}>
                        <a className={styles.bnb_button} href="#">
                            <img src={BNB} alt="BNB" /> 
                            <p>BSC</p>
                        </a>

                        <a className={styles.polygon_button} href="#">
                            <img src={Polygon} alt="Polygon" /> 
                            <p>Polygon</p>
                        </a>

                        <a className={styles.avalanche_button} href="#">
                            <img src={Avalanche} alt="Avalanche" /> 
                            <p>Avalanche</p>
                        </a>
                    </div>
                </div>

                <div className={styles.global_top}>

                    <div className={styles.top2_block}>
                        <div className={styles.global_inform_winner_2}>
                            <div className={styles.inform_winner_2}>
                                <div className={styles.wallet_2}>
                                    <img src={image_account} alt="" />
                                    <p>0x32f1518....d67ac</p>
                                </div>

                                <div className={styles.inform_statistics_winner_2}>
                                    <div className={styles.play_inform_2}>
                                        <img src={play_icon} alt="" />
                                        <span>124</span>
                                    </div>

                                    <div className={styles.inform_money_winner_2}>
                                        <img src={bag_money_icon} alt="" />
                                        <span>$10,934.00</span>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <p>2</p>
                        <img className={styles.img_top2} src={Top2} alt="" />

                    </div>

                    <div className={styles.top1_block}>

                        <div className={styles.global_inform_winner_1}>
                            <div className={styles.inform_winner_1}>
                                <div className={styles.wallet_1}>
                                    <img src={Cup} alt="" />
                                    <p>0x32f1518....d67ac</p>
                                </div>

                                <div className={styles.inform_statistics_winner_1}>
                                    <div className={styles.play_inform_1}>
                                        <img src={play_icon} alt="" />
                                        <span>355</span>
                                    </div>

                                    <div className={styles.inform_money_winner_1}>
                                        <img src={bag_money_icon} alt="" />
                                        <span>$19,150.21</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                        <p>1</p>
                        <img className={styles.img_top1} src={Top1} alt="" />
                    </div>

                    <div className={styles.top3_block}>
                        <div className={styles.global_inform_winner_3}>
                                <div className={styles.inform_winner_3}>
                                    <div className={styles.wallet_3}>
                                        <img src={image_account} alt="" />
                                        <p>0x32f1518....d67ac</p>
                                    </div>

                                    <div className={styles.inform_statistics_winner_3}>
                                        <div className={styles.play_inform_3}>
                                            <img src={play_icon} alt="" />
                                            <span>56</span>
                                        </div>

                                        <div className={styles.inform_money_winner_3}>
                                            <img src={bag_money_icon} alt="" />
                                            <span>$6,355.13</span>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        <p>3</p>
                        <img className={styles.img_top3} src={Top3} alt="" />
                    </div>

                </div>
            </div>
            <div className={styles.block_player}>
                <PlayerList/>
            </div>
        </div>
    )
}

export default Basic