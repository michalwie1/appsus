// import { MailFilter } from "./MailFilter.jsx"

export function MailCategories({ onCategoryChange }) {
// console.log(categoryClass)
// const categoryChosenClass = category ? 'clicked' : ''

    return (
        <section className="mail-categories">

            <div className = "category clicked"
                title= "Person-to-person conversations and messages that don't appear in other tabs."
                onClick={(ev) => onCategoryChange(ev, 'primary')}>
             <span className= "material-symbols-outlined"
                        >image
                    </span>
            <p>Primary</p>
            </div>

            <div className= "category"
                title= "Marketing, interests, social and political causes, and other promotional emails will be shown here."
                onClick={(ev) => onCategoryChange(ev, 'promotions')}>
                 <span className= "material-symbols-outlined"
                        >sell
                    </span>
            <p>Promotions</p>
            </div>

            <div className="category"
                title= "Messages from social networks, media-sharing sites, online dating services, and other social websites."
                onClick={(ev) => onCategoryChange(ev, 'social')}>
                 <span className= "material-symbols-outlined"
                        >person
                    </span>
            <p>Social</p>

            </div>

            <div className="category"
                title= "Personal, auto-generated updates including confirmations, receipts, bills, and statements."
                onClick={(ev) => onCategoryChange(ev, 'updates')}>
                 <span className= "material-symbols-outlined"
                        >info
                    </span>
            <p>Updates</p>

            </div>
        </section>
    )
}
