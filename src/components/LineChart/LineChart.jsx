import { LineChart as LChart, Line } from 'recharts';

const LineChart = () => {

    const studentsMarksData = [
        { "id": 1, "name": "Alice", "math": 78, "physics": 82, "chemistry": 75 },
        { "id": 2, "name": "Bob", "math": 85, "physics": 88, "chemistry": 80 },
        { "id": 3, "name": "Charlie", "math": 92, "physics": 95, "chemistry": 89 },
        { "id": 4, "name": "David", "math": 65, "physics": 70, "chemistry": 68 },
        { "id": 5, "name": "Emma", "math": 88, "physics": 85, "chemistry": 87 },
        { "id": 6, "name": "Frank", "math": 74, "physics": 78, "chemistry": 72 },
        { "id": 7, "name": "Grace", "math": 90, "physics": 93, "chemistry": 91 },
        { "id": 8, "name": "Hannah", "math": 81, "physics": 79, "chemistry": 83 },
        { "id": 9, "name": "Ian", "math": 69, "physics": 72, "chemistry": 70 },
        { "id": 10, "name": "Jack", "math": 95, "physics": 97, "chemistry": 96 }
    ];


    return (
        <div>
            <LChart width={500} height={400} data={studentsMarksData}>
                <Line dataKey="math"></Line>
                <Line dataKey={'physics'}></Line>
            </LChart>
        </div>
    );
};

export default LineChart;