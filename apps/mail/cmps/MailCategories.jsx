// import { MailFilter } from "./MailFilter.jsx"

export function MailCategories({ onCategoryChange }) {
// console.log(categoryClass)
// const categoryChosenClass = category ? 'clicked' : ''

    return (
        <section className="mail-categories">

            <div className = "category"
                onClick={(ev) => onCategoryChange(ev, 'primary')}>
            <p>Primary</p>
             {/* <span className= "material-symbols-outlined"
                    title= "Marketing..."
                        >delete
                    </span> */}
            </div>

            <div className= "category"
                onClick={(ev) => onCategoryChange(ev, 'promotions')}>
            <p>Promotions</p>
                 {/* <span className= "material-symbols-outlined"
                    title= "Marketing, interests, social and political causes, and other promotional emails will be shown here."
                        >delete
                    </span> */}
            </div>

            <div className="category"
                onClick={(ev) => onCategoryChange(ev, 'social')}>
            <p>Social</p>
                 {/* <span className= "material-symbols-outlined"
                    title= "Messages from social networks, media-sharing sites, online dating services, and other social websites."
                        >delete
                    </span> */}

            </div>

            <div className="category"
                onClick={(ev) => onCategoryChange(ev, 'updates')}>
            <p>Updates</p>
                 {/* <span className= "material-symbols-outlined"
                    title= "Personal, auto-generated updates including confirmations, receipts, bills, and statements."
                        >delete
                    </span> */}

            </div>
        </section>
    )
}
