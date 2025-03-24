interface CustomBarProps {
    x: number;
    y: number;
    width: number;
    height: number;
    fill: string;
    stroke: string;
}

const CustomBar = ({ x, y, width, height, fill, stroke = "#0268D4" }: CustomBarProps) => {
    return (
        <g>
            <rect x={x} y={y} width={width} height={height} fill={fill} />
            <rect x={x} y={y} width={width} height={3} fill={stroke} />
        </g>
    );
};

export default CustomBar;