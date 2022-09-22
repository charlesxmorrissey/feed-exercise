import type { NextPage } from 'next'

import { FeedProvider } from 'components/FeedProvider'
import Posts from 'components/Posts'

import styles from './FeedPage.module.css'

const FeedPage: NextPage = () => (
  <main className={styles.feedWrapper}>
    <header className={styles.feedHeader}>
      <h1>Feed exercise</h1>
    </header>

    <section className={styles.feedContainer}>
      <div className={styles.feedContent}>
        <FeedProvider>
          <Posts />
        </FeedProvider>
      </div>
    </section>

    <footer className={styles.feedFooter}>
      <div className={styles.feedHeaderContainer}>
        Feed exercise @{new Date().getFullYear()}
      </div>
    </footer>
  </main>
)

export default FeedPage
