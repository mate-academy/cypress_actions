"""
Advanced level:
Check next test cases:
1. Pagination
2. Rows count selection
3. Add new worker
4. Delete worker
5. Delete all worker
6. Find worker in search field and edit it
7. Validate data in worker row after creating worker
8. Check search by all column values

https://demoqa.com/webtables
"""
from selenium.webdriver.common.keys import Keys
from selenium import webdriver

persons = [];
persons.append(['Dima', 'Litvin', 'dimalitvin192.0@gmail.com', 22, 20000, 'Java Programmer'])
persons.append(['Petro', 'Litvinov', 'petro997.0@gmail.com', 20, 30000, 'Senior QA automayion'])
persons.append(['Katya', 'Makarova', 'kate@gmail.com', 27, 25000, 'UI/UX designer'])
persons.append(['Leniod', 'Levitskiy', 'leon92.0@gmail.com', 21, 30000, 'PHP Programmer'])
persons.append(['Tolya', 'Ageev', 'dimalitvin192.0@gmail.com', 19, 15000, 'SQL developer'])
persons.append(['Tolya', 'Ageev', 'dimalitvin192.0@gmail.com', 19, 15000, 'SQL developer'])
persons.append(['Tolya', 'Ageev', 'dimalitvin192.0@gmail.com', 19, 15000, 'SQL developer'])
persons.append(['Vlad', 'Magdych', 'vlad@gmail.com', 24, 15000, 'QC'])

# 1. Pagination, 3. Add new worker
driver = webdriver.Chrome(executable_path="c:/selenium/chromedriver.exe")
driver.set_window_size(1920, 1080)
driver.get("https://demoqa.com/webtables")

addButton = driver.find_element_by_css_selector('div[class = \'col-md-7\'] > button[id = \'addNewRecordButton\']')
for person in persons:
    addButton.click()
    fields = driver.find_elements_by_css_selector('form[id = \'userForm\'] > div div:nth-child(2) > input')
    i = 0;
    for field in fields:
        field.send_keys(person[i])
        i += 1
    submitButton = driver.find_element_by_css_selector('form[id = \'userForm\'] div:nth-child(7) > div > button')
    submitButton.click()

nextButton = driver.find_element_by_css_selector('.-next > button')
nextButton.location_once_scrolled_into_view
nextButton.click();

countOfPages = driver.find_element_by_css_selector('div > div.-center > span.-pageInfo > span')
print countOfPages.text
assert '2' in countOfPages.text

# 2. Row count selection
driver = webdriver.Chrome(executable_path="c:/selenium/chromedriver.exe")
driver.set_window_size(1920, 1080)
driver.get("https://demoqa.com/webtables")

rowsCountSelection = driver.find_elements_by_css_selector('span.select-wrap.-pageSizeOptions > select > option')
for rowCountSelection in rowsCountSelection:
    if rowCountSelection.text == '5 rows':
        rowCountSelection.click();
        break

# 4 Delete worker
driver = webdriver.Chrome(executable_path='c:/selenium/chromedriver.exe')
driver.set_window_size(1920, 1080)
driver.get('https://demoqa.com/webtables')

deleted = driver.find_elements_by_css_selector(
    'div.rt-tbody > div:nth-child(1) > div > div:nth-child(7) > div > span[title=\'Delete\'] > svg')
deleted[0].click()

# 5 Delete all workers
driver = webdriver.Chrome(executable_path='c:/selenium/chromedriver.exe')
driver.set_window_size(1920, 1080)
driver.get('https://demoqa.com/webtables')

rows = driver.find_elements_by_css_selector(
    'div.rt-tbody > div[class = \'rt-tr-group\'] > div[class = \'rt-tr -odd\'], div[class = \'rt-tr -even\']')
for row in rows:
    button = driver.find_elements_by_css_selector('div:nth-child(7) > div > span[title=\'Delete\'] > svg > path')
    button[0].click()

# 8. Check search by all column values
driver = webdriver.Chrome(executable_path='c:/selenium/chromedriver.exe')
driver.set_window_size(1920, 1080)
driver.get('https://demoqa.com/webtables')
search = driver.find_element_by_css_selector(
    'div[class = \'web-tables-wrapper\'] > div:nth-child(2) > div:nth-child(2) > div > input')
search.send_keys('Cierra', Keys.ENTER)
names = driver.find_elements_by_css_selector('div.rt-tbody > div:nth-child(1) > div > div:nth-child(1)')
assert 1 == len(names)
assert names[0].text == 'Cierra'
search.clear()

search.send_keys('Vega', Keys.ENTER)
surnames = driver.find_elements_by_css_selector('div.rt-tbody > div:nth-child(1) > div > div:nth-child(2)')
assert 1 == len(names)
assert surnames[0].text == 'Vega'
search.clear()

search.send_keys(45, Keys.ENTER)
ages = driver.find_elements_by_css_selector('div.rt-tbody > div:nth-child(1) > div > div:nth-child(3)')
assert 1 == len(ages)
assert ages[0].text == '45'
search.clear()

search.send_keys('kierra@example', Keys.ENTER)
emails = driver.find_elements_by_css_selector('div.rt-tbody > div:nth-child(1) > div > div:nth-child(4)')
assert 1 == len(emails)
assert emails[0].text == 'kierra@example.com'
search.clear()

search.send_keys(10000, Keys.ENTER)
salaries = driver.find_elements_by_css_selector('div.rt-tbody > div:nth-child(1) > div > div:nth-child(5)')
assert 1 == len(salaries)
assert salaries[0].text == '10000'
search.clear()

search.send_keys('Legal', Keys.ENTER)
departments = driver.find_elements_by_css_selector('div.rt-tbody > div:nth-child(1) > div > div:nth-child(6)')
assert 1 == len(departments)
assert departments[0].text == 'Legal'
search.clear()

#7. Validate data in worker row after creating worker
driver = webdriver.Chrome(executable_path='c:/selenium/chromedriver.exe')
driver.set_window_size(1920, 1080)
driver.get('https://demoqa.com/webtables')
addButton = driver.find_element_by_css_selector('div[class = \'col-md-7\'] > button[id = \'addNewRecordButton\']')
addButton.click()
person = ['Ludmila', 'Ageeva', 'luda@gmail.com', '19', '20000', 'Middle SQL developer']
fields = driver.find_elements_by_css_selector('form[id = \'userForm\'] > div div:nth-child(2) > input')

j = 0;
for field in fields:
    field.send_keys(person[j])
    j += 1
submitButton = driver.find_element_by_css_selector('form[id = \'userForm\'] div:nth-child(7) > div > button')
submitButton.click()

rows = driver.find_elements_by_css_selector(
    'div.rt-tbody > div[class = \'rt-tr-group\'] > div[class = \'rt-tr -odd\'], div[class = \'rt-tr -even\']')
person = ['Ludmila', 'Ageeva', '19', 'luda@gmail.com', '20000', 'Middle SQL developer']
i = 0;
j = 0;
for row in rows:
    fields = row.find_elements_by_css_selector('div')
    i = 0;
    j = 0;
    for data in person:
        if data == fields[i].text:
            j += 1
        i += 1
    if j == len(person):
        break;
assert j == len(person)

# 6. Find worker in search field and edit it
search = driver.find_element_by_css_selector(
    'div[class = \'web-tables-wrapper\'] > div:nth-child(2) > div:nth-child(2) > div > input')
search.send_keys('Cierra', Keys.ENTER)
rows = driver.find_elements_by_css_selector(
    'div.rt-tbody > div[class = \'rt-tr-group\'] > div[class = \'rt-tr -odd\'], div[class = \'rt-tr -even\']')
for row in rows:
    fields = row.find_elements_by_css_selector('div')
    if fields[0].text == 'Cierra':
        edited = driver.find_element_by_css_selector(
            'div.rt-tbody > div:nth-child(1) > div > div:nth-child(7) > div > span[title=\'Edit\'] > svg')
        edited.click()
        form = driver.find_element_by_css_selector(
            ".modal-body > #userForm > div:nth-child(1) > div:nth-child(2) > input")
        form.clear();
        form.send_keys("Petro")
        submit = driver.find_element_by_css_selector("#submit")
        submit.click()

        break;
