import { useEffect, useRef } from "react";
import * as d3 from "d3";

const skillData = [
  { skill: "Python", level: 90 },
  { skill: "AI", level: 85 },
  { skill: "ML", level: 82 },
  { skill: "NLP", level: 78 },
  { skill: "Deep Learning", level: 75 },
  { skill: "Data Science", level: 80 },
  { skill: "Web Dev", level: 60 },
];

const SkillChart = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const container = svgRef.current.parentElement;
    const width = container?.clientWidth || 600;
    const height = 320;
    const margin = { top: 20, right: 30, bottom: 50, left: 100 };

    svg.attr("viewBox", `0 0 ${width} ${height}`);

    const x = d3
      .scaleLinear()
      .domain([0, 100])
      .range([margin.left, width - margin.right]);

    const y = d3
      .scaleBand()
      .domain(skillData.map((d) => d.skill))
      .range([margin.top, height - margin.bottom])
      .padding(0.35);

    // Get computed styles for theming
    const styles = getComputedStyle(document.documentElement);
    const textColor = styles.getPropertyValue("--foreground").trim();
    const mutedColor = styles.getPropertyValue("--muted-foreground").trim();

    // Bars
    svg
      .selectAll("rect.bg")
      .data(skillData)
      .join("rect")
      .attr("class", "bg")
      .attr("x", margin.left)
      .attr("y", (d) => y(d.skill)!)
      .attr("height", y.bandwidth())
      .attr("width", x(100) - margin.left)
      .attr("rx", 6)
      .attr("fill", `hsl(${mutedColor} / 0.15)`);

    // Gradient
    const defs = svg.append("defs");
    const gradient = defs
      .append("linearGradient")
      .attr("id", "bar-gradient")
      .attr("x1", "0%")
      .attr("x2", "100%");
    gradient.append("stop").attr("offset", "0%").attr("stop-color", "hsl(217 91% 60%)");
    gradient.append("stop").attr("offset", "100%").attr("stop-color", "hsl(260 80% 68%)");

    svg
      .selectAll("rect.bar")
      .data(skillData)
      .join("rect")
      .attr("class", "bar")
      .attr("x", margin.left)
      .attr("y", (d) => y(d.skill)!)
      .attr("height", y.bandwidth())
      .attr("width", 0)
      .attr("rx", 6)
      .attr("fill", "url(#bar-gradient)")
      .transition()
      .duration(1000)
      .delay((_, i) => i * 100)
      .attr("width", (d) => x(d.level) - margin.left);

    // Percentage labels
    svg
      .selectAll("text.value")
      .data(skillData)
      .join("text")
      .attr("class", "value")
      .attr("x", margin.left)
      .attr("y", (d) => y(d.skill)! + y.bandwidth() / 2)
      .attr("dy", "0.35em")
      .attr("dx", 8)
      .attr("fill", `hsl(${textColor})`)
      .attr("font-size", "12px")
      .attr("font-weight", "600")
      .attr("opacity", 0)
      .text((d) => `${d.level}%`)
      .transition()
      .duration(1000)
      .delay((_, i) => i * 100)
      .attr("x", (d) => x(d.level) - 40)
      .attr("opacity", 1);

    // Y axis labels
    svg
      .selectAll("text.label")
      .data(skillData)
      .join("text")
      .attr("class", "label")
      .attr("x", margin.left - 10)
      .attr("y", (d) => y(d.skill)! + y.bandwidth() / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "end")
      .attr("fill", `hsl(${textColor})`)
      .attr("font-size", "13px")
      .attr("font-weight", "500")
      .text((d) => d.skill);
  }, []);

  return <svg ref={svgRef} className="w-full" style={{ minHeight: 320 }} />;
};

export default SkillChart;
