// import { MailFilter } from "./MailFilter.jsx"

export function MailCategories({ onCategoryChange }) {
// console.log(categoryClass)
// const categoryChosenClass = category ? 'clicked' : ''

    return (
        <section className="mail-categories">
            <div className = "category clicked">
            <p onClick={() => onCategoryChange('primary')}>Primary</p>
             {/* <span className= "material-symbols-outlined"
                    title= "Marketing, interests, social and political causes, and other promotional emails will be shown here."
                        >delete
                    </span> */}
            </div>

            <div className= "category">
            <p onClick={() => onCategoryChange('promotions')}>Promotions</p>
                 {/* <span className= "material-symbols-outlined"
                    title= "Marketing, interests, social and political causes, and other promotional emails will be shown here."
                        >delete
                    </span> */}
            </div>

            <div className="category">
            <p onClick={() => onCategoryChange('social')}>Social</p>
                 {/* <span className= "material-symbols-outlined"
                    title= "Messages from social networks, media-sharing sites, online dating services, and other social websites."
                        >delete
                    </span> */}

            </div>

            <div className="category">
            <p onClick={() => onCategoryChange('updates')}>Updates</p>
                 {/* <span className= "material-symbols-outlined"
                    title= "Personal, auto-generated updates including confirmations, receipts, bills, and statements."
                        >delete
                    </span> */}

            </div>
        </section>
    )
}
