function getDate_yyyymmdd() {

    const date = new Date();

    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2,'0');
    const dd = String(date.getDate()).padStart(2,'0');

    return `${yyyy}${mm}${dd}`
}

url = "https://www.espn.com/wnba/schedule/_/" + getDate_yyyymmdd()
window.location.replace(url)