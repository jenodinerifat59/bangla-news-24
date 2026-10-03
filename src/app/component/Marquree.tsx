import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
interface Headline {
    id: string,
    title: string
}
const Marquree = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10')
    const data = await res.json();
    const headliens:Headline[] = data.data 
    return (
        <div className= " bg-red-600 text-white ">
            <div className="flex max-w-7xl mx-auto">
                <div className="bg-red-800 py-1.5 px-5 font bold">
                সর্বশেষ
            </div>
            <MarqueeText className="py-1.5" direction='right' duration={15}  pauseOnHover={true}>
            {
                headliens.map(headline => <span key={headline.id}>
                    <span>{headline.title}</span>
                    <span className="mx-3">●</span>
                </span>)
            }
            </MarqueeText>
            </div>
        </div>
    );
};

export default Marquree;