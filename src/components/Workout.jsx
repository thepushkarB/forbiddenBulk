import React from "react";
import SectionWrapper from "./SectionWrapper";
import WorkoutCard from "./WorkoutCard";

export default function Workout(props) {

    const { workout } = props;

    return (
        <SectionWrapper id={"workout"} header={"welcome to"} title={['The', 'Danger', 'Zone']}>
            <div className="flex flex-col gap-10">
                { workout.map((exe, idx) => {
                    return (
                        <WorkoutCard  index={idx} exercise={exe} key={idx}/>
                    )
                })}
            </div>
        </SectionWrapper>
    )
}