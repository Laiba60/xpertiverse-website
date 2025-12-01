import TopBanner from '../components/LaunchWebsite.jsx'
import RecentPost from '../components/RecentPost.jsx'
import ContactSource from '../components/ContactSources.jsx'
import Newsletter from '../components/NewsletterSection.jsx'

function SinglePost() {
  return (
    <>
        <TopBanner/>
         <RecentPost/>
        <ContactSource/>
        <Newsletter/>
    </>
  );
}

export default SinglePost;