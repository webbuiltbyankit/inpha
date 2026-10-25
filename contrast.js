const L=h=>{const c=[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)/255).map(v=>v<=.03928?v/12.92:((v+.055)/1.055)**2.4);return .2126*c[0]+.7152*c[1]+.0722*c[2]};
const cr=(a,b)=>{const x=L(a),y=L(b);return ((Math.max(x,y)+.05)/(Math.min(x,y)+.05)).toFixed(2)};
const P=[['Ink on Paper','#1C1B19','#F6F0E4'],['Ink on Paper 2','#1C1B19','#EDE4D0'],['Muted text on Paper','#5C584E','#F6F0E4'],['Muted text on Paper 2','#5C584E','#EDE4D0'],
['Paper on Green','#F6F0E4','#17382F'],['Paper on Graphite','#F6F0E4','#26292B'],['Paper on Ink','#F6F0E4','#1C1B19'],
['White on Orange (button)','#FFFFFF','#E8622C'],['White on Orange-dark (hover)','#FFFFFF','#C4491A'],['Ink on Orange','#1C1B19','#E8622C'],
['Orange-dark text on Paper','#C4491A','#F6F0E4'],['Orange on Ink (links in footer)','#E8622C','#1C1B19'],
['Placeholder brown on Paper','#8A4B00','#F6F0E4'],['Placeholder light on Green','#F3C995','#17382F'],
['Error on Paper','#B3261E','#F6F0E4'],['Success on tint','#1E6B45','#EAF3EC'],['Ink on Sky','#1C1B19','#BFD8E3'],['Muted #2d3b42 on Sky','#2D3B42','#BFD8E3'],['Footer text #C9C3B4 on Ink','#C9C3B4','#1C1B19'],['Tag green on Paper','#17382F','#F6F0E4'],['Paper on Orange-dark','#F6F0E4','#C4491A']];
P.forEach(([n,f,b])=>{const r=cr(f,b);console.log(n.padEnd(36),r,r>=7?'AAA':r>=4.5?'AA':r>=3?'AA large only':'FAIL')});
