export const pageview = (url) => {
    window.gtag('config', "UA-246056744-1", {
      page_path: url,
    })
  }
  
// log specific events happening.
export const event = ({ action, params }) => {
    window.gtag('event', action, params)
}