import { DiReact } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiPhp } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { FaLaravel } from "react-icons/fa";
import { DiHtml5 } from "react-icons/di";
import { FaJava } from "react-icons/fa";

const Technologies = () => {
    return (
        <div className='border-b border-neutral-900 pb-24'>
            <h1 className='my-20 text-center text-4xl'>
                Technologies
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border4 border-neutral-500 p-4">
                    <DiHtml5 className="text-7xl text-cyan-700" />
                </div>
                <div className="rounded-2xl border4 border-neutral-500 p-4">
                    <DiReact className="text-7xl text-cyan-700" />
                </div>
                <div className="rounded-2xl border4 border-neutral-500 p-4">
                    <DiJsBadge className="text-7xl text-cyan-700" />
                </div>
                <div className="rounded-2xl border4 border-neutral-500 p-4">
                    <DiPhp className="text-7xl text-cyan-700" />
                </div>
                <div className="rounded-2xl border4 border-neutral-500 p-4">
                    <DiMysql className="text-7xl text-cyan-700" />
                </div>
                <div className="rounded-2xl border4 border-neutral-500 p-4">
                    <FaLaravel className="text-7xl text-cyan-700" />
                </div>
                <div className="rounded-2xl border4 border-neutral-500 p-4">
                    <FaJava className="text-7xl text-cyan-700" />
                </div>
                <div className="rounded-2xl border4 border-neutral-500 p-4">
                    <DiCss3 className="text-7xl text-cyan-700" />
                </div>

            </div>
        </div>
    )
}

export default Technologies
