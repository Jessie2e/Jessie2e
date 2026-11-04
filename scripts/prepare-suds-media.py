from pathlib import Path
from PIL import Image,ImageDraw,ImageFont
import subprocess
import sys
source_dir = Path(sys.argv[1]) if len(sys.argv) > 1 else Path.home() / 'Desktop'
p=Path(__file__).resolve().parents[1] / 'public/suds-scissors';p.mkdir(exist_ok=True)
for source,name in [('sudshero','hero'),('services-suds','services'),('Pricing-suds','pricing'),('sudsreviews','reviews')]:
 im=Image.open(source_dir / (source+'.png')).convert('RGB');im.thumbnail((1800,1800));im.save(p/f'{name}.webp',quality=87)
 if name=='hero':
  for w in [480,900]:
   t=im.copy();t.thumbnail((w,w));t.save(p/f'hero-{w}.webp',quality=88)
import imageio_ffmpeg
f=imageio_ffmpeg.get_ffmpeg_exe()
for source,name,duration in [('beforeaftersuds','before-after',14.55),('pricingvideowalkthroughsuds','pricing-demo',9.5)]:
 args=[f,'-y','-i',str(source_dir / (source+'.mov')),'-t',str(duration),'-vf','scale=1440:-2','-r','24','-c:v','libx264','-crf','25','-preset','fast','-pix_fmt','yuv420p','-an','-movflags','+faststart',str(p/f'{name}.mp4')]
 subprocess.run(args,check=True,capture_output=True)
 subprocess.run([f,'-y','-ss','0.5','-i',str(p/f'{name}.mp4'),'-frames:v','1',str(p/f'{name}-poster.webp')],check=True,capture_output=True)
# Reproducible branded sharing card, keeping the screenshot intact.
canvas=Image.new('RGB',(1200,630),'#122e25');draw=ImageDraw.Draw(canvas)
font='/System/Library/Fonts/Supplemental/Arial.ttf';bold='/System/Library/Fonts/Supplemental/Arial Bold.ttf'
draw.text((60,52),'2e Studio  /  CLIENT CASE STUDY',font=ImageFont.truetype(bold,20),fill='#e3bd6d')
draw.text((60,160),'Suds ’n',font=ImageFont.truetype(bold,54),fill='#fffaf0');draw.text((60,226),'Scissors',font=ImageFont.truetype(bold,54),fill='#fffaf0')
draw.text((60,330),'Their first website.',font=ImageFont.truetype(font,25),fill='#fffaf0');draw.text((60,370),'Grooming. Boarding.',font=ImageFont.truetype(font,23),fill='#e3bd6d');draw.text((60,406),'A clearer next step.',font=ImageFont.truetype(font,23),fill='#e3bd6d')
im=Image.open(p/'hero.webp');im.thumbnail((620,430));canvas.paste(im,(520,(630-im.height)//2));canvas.save(p/'social-share-v1.jpg',quality=90)
print([(x.name,round(x.stat().st_size/1024)) for x in p.iterdir()])
