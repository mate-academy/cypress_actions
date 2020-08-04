"""
Basic level:
1. Fill all fields in forms except "picture" 
2. Click on [Submit] button
3. Validate inputed data in modal window
Site: https://demoqa.com/automation-practice-form

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
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains

driver = webdriver.Chrome()
driver.set_window_size(1920, 1080)
driver.get("https://demoqa.com/automation-practice-form")
driver.find_element_by_xpath('//*[@id="firstName"]').send_keys('Yur')
driver.find_element_by_xpath('//*[@id="lastName"]').send_keys('Yur')
driver.find_element_by_xpath('//*[@id="userEmail"]').send_keys('Yur')
driver.find_element_by_xpath('//*[@id="userNumber"]').send_keys('Yur')
move_element = driver.find_element_by_css_selector('[id="submit"]')
actions = ActionChains(driver)
actions.move_to_element(move_element).perform()
driver.find_element_by_xpath('//*[@id="subjectsContainer"]/div/div[1]').click()
driver.find_element_by_xpath('//*[@id="hobbiesWrapper"]/div[2]/div[2]/label').click()
driver.find_element_by_xpath('//*[@id="currentAddress"]').send_keys('Yur')
driver.find_element_by_xpath('//*[@id="state"]/div/div[1]').click()
driver.find_element_by_xpath('//*[@id="react-select-3-input"]').send_keys('NCR', Keys.ENTER)
driver.find_element_by_xpath('//*[@id="react-select-4-input"]').send_keys('Delhi', Keys.ENTER)
driver.implicitly_wait(10)
buton = driver.find_element_by_xpath('//*[@id="submit"]')
buton.click()
driver.quit()
