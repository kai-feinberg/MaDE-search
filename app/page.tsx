import Image from "next/image";

import { ChatWindow } from "@/components/ChatWindow";

const placeholders = [
    "patent research tools",
    "presentation tips",
    "past examples",
    "mental health resources (jk)",
];

export default function Home() {
    return (
        <div className="flex flex-col justfiy-center">


            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between lg:gap-16 mx-20">
                    <div className="w-full lg:w-1/2 md:w-1/2">
                        <Image src="/images/grad-cap.png" alt="Willie the Wildcat" width={500} height={500} className="mx-auto" />
                    </div>
                    <div className="w-full lg:w-1/2 space-y-4 text-center">
                        <h1 className="text-5xl font-bold text-gray-900">
                            Welcome to <span className="text-[#4e2a84]">Ask Cappy</span>!
                        </h1>
                        <p className="mt-12 text-lg text-gray-600">
                            Cappy knows all about the best resources for your MaDE capstone project. From journey mapping and patent research to benchmarking and past examples, Cappy has you covered.
                            Ask Cappy anything!
                        </p>
                        <div className="mt-5 sm:mt-8">
                            <div className="scroll mx-auto"></div>
                        </div>
                    </div>
                </div>
            </div>

            <ChatWindow
                endpoint="api/chat"
                emptyStateComponent={<div></div>} // what to show when no messages are present
                showIngestForm={false} // lets you upload context to search through
                placeholder={placeholders[Math.floor(Math.random() * placeholders.length)]}
                emoji="🎓"
                titleText="Ask Cappy"
            ></ChatWindow>
        </div>
    );
}
