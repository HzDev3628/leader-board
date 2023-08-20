import styles from './style_header.module.scss'

import logotype from "../../../public/Logotype.svg"
import untitled from "../../../public/Untitled.svg"
import alert_bell_notification_icon from "../../../public/alert_bell_notification_icon.svg"
import ellips from"../../../public/ellips10.svg"
import image_account from "../../../public/image_account.svg"
import group from "../../../public/group.svg"

const Header = () => {
    return(
        <div>
            <div className={styles.global_header}>
                <div className={styles.header_logotype_untitled}>
                    
                    <img className={styles.logotype} src={logotype} alt="Logotype" />
        
                    <a href='#' className={styles.button_untitled}>
                        <img className={styles.untitled} src={untitled} alt="untitled" />
                    </a>
        
                    <div className={styles.rectangle}></div>
                </div>
        
                <div className={styles.header_menu_account}>
                    <div className={styles.menu_header}>
                        <a href='#'>Main</a>
                        <a href='#'>My deals</a>
                        <a href='#'>Leaderboard</a>
                        <a href='#'>Community</a>
                    </div>
        
                    <div className={styles.header_account}>
        
                    <div className={styles.global_alert}>
                        <img className={styles.alert_bell_image} src={alert_bell_notification_icon} alt="" />
                        <img className={styles.ellips10} src={ellips} alt="" />
                    </div>

                    <a href='#' className={styles.button_untitled_mobile}>
                        <img className={styles.untitled_mobile} src={untitled} alt="untitled" />
                    </a>
        
                    <div className={styles.image_wallet}>
                        <img className={styles.image_account} src={image_account} alt="" />
                        <p>0x32f1518....d67ac</p>
                    </div>
        
                    <a href='#' className={styles.button_group}>
                        <img className={styles.image_group} src={group} alt="" />
                    </a>
                    </div>
        
                </div>
            </div>
        
            <div className={styles.rectangle_bottom}>
                <div className={styles.active_page}></div>
            </div>
            
        </div>
    )
}

export default Header