import requests
import os
import time
import random
import re
import pdfkit
from bs4 import BeautifulSoup
from lxml.html import etree


def get_text(url):
    # 获取url的内容，调用频率极高
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'}
    response = requests.get(url, headers=headers)
    response.encoding = 'utf-8'
    return response.text


def clean_str(string):
    # 创建文件时候去掉特殊字符，防止创建失败
    return re.sub(r'\n|\s', '', string)


def analysis_text(url):
    # 核心方法，获取需要的html信息，以方便重新组合形成新的html文件，注意是带上标签的
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'}
    text = get_text(url)
    soup = BeautifulSoup(text, 'html.parser')

    try:
        title = soup.find_all('h1')[0]
        main_text = soup.find_all(id="arc-body")[0]
        file_name = re.findall('<h1>(.*?)</h1>', text)[0]
        file_name = clean_str(file_name)
        imgs = re.findall('<img .*?src=\"(.*?)\"', text)
        for i in imgs:
            if '?' not in i:
                name = i.split('/')[-1]
                with open(name, 'wb') as img:
                    img.write(requests.get(
                        'http://c.biancheng.net' + i, headers=headers).content)
        main_text = re.sub(r'/uploads/allimg/\d+/', '', str(main_text))
    except IndexError as i:
        print(i, 'Information error!', sep=': ')
        title = ''
        main_text = ''
        file_name = ''
    return title, main_text, file_name


def write_html(url):
    # 形成新的HTML文件
    title, main_text, file_name = analysis_text(url)
    with open(file_name + '.html', 'w', encoding='utf-8') as ht:
        ht.write(str(title))
        ht.write(str(main_text))
    return file_name


def write_pdf(count, url):
    # 将html文件写入pdf， 注意的是参数与使用方法
    file_name = write_html(url)
    options = {
        'page-size': 'Letter',
        'encoding': "UTF-8",
        'margin-top': '0.75in',
        'margin-right': '0.75in',
        'margin-bottom': '0.75in',
        'margin-left': '0.75in',
        'no-outline': None,
        'custom-header': [
            ('Accept-Encoding', 'gzip')
        ]
    }
    path_wk = r'C:\Program Files\wkhtmltopdf\bin\wkhtmltopdf.exe'  # wkhtmltopdf安装位置
    config = pdfkit.configuration(wkhtmltopdf=path_wk)
    pdfkit.from_file(file_name + '.html', f'{count}-{file_name}.pdf',
                     options=options, configuration=config)


def clean_dir():
    # 爬取过程会生成很多缓存文件，爬取完成后一并清除
    fpath = os.getcwd()
    for file in os.listdir(fpath):
        if '.gif' in file or '.html' in file or '.jpg' in file:
            os.remove(os.path.join(fpath, file))



def get_urls_xpath(start_url):
    # 获取需要爬取的链接并检查格式
    text = get_text(start_url)
    ehtml = etree.HTML(text)
    hrefs = ehtml.xpath('//div[@id="sidebar"]//dd/a/@href')
    for i in range(len(hrefs)):
        if 'http' not in hrefs[i] :
            hrefs[i] = 'http://c.biancheng.net' + hrefs[i]
    return hrefs


if __name__ == '__main__':
    start_url = 'http://c.biancheng.net/tensorflow/'
    urls = get_urls_xpath(start_url)
    for count, url in enumerate(urls):
        time.sleep(random.random())
        write_pdf(count + 1, url)
        clean_dir()

