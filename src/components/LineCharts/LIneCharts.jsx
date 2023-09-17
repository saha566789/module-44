import { LineChart as LChart, Line } from 'recharts';

const LIneCharts = () => {
    
    const mathMarks = [
        { id: 1, studentName: "Alice", marks: 85 },
        { id: 2, studentName: "Bob", marks: 78 },
        { id: 3, studentName: "Charlie", marks: 92 },
        { id: 4, studentName: "David", marks: 68 },
        { id: 5, studentName: "Eva", marks: 95 },
        { id: 6, studentName: "Frank", marks: 73 },
        { id: 7, studentName: "Grace", marks: 88 },
        { id: 8, studentName: "Hannah", marks: 90 },
        { id: 9, studentName: "Ian", marks: 82 },
        { id: 10, studentName: "Jessica", marks: 79 }
      ];
      
      
    return (
        <div>
            <LChart width={500} height={400} data={mathMarks}>
            <Line dataKey={"marks"} stroke='red'></Line>
            </LChart>
        </div>
    );
};

export default LIneCharts;