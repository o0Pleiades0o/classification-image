import React from 'react'
import Wave from 'react-wavify'

function Wave_BG() {
    return (
        <div className="container max-w-full py-20">
            <Wave fill="url(#gradient)" speed={0.25} height={1}>
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                        <stop offset="10%" stopColor="#F7E2FF" />
                        <stop offset="90%" stopColor="#BF9EE6" />
                    </linearGradient>
                </defs>
            </Wave>
        </div>
    )
}

export default Wave_BG