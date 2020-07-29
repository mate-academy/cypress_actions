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
import unittest
import time


class TestBasicLevel(unittest.TestCase):
    def setUp(self) -> None:
        self.chrome_options = webdriver.ChromeOptions()
        self.chrome_options.add_argument('headless')
        # self.driver = webdriver.Chrome(options=self.chrome_options)
        self.driver = webdriver.Chrome()
        self.driver.implicitly_wait(10000)
        self.driver.set_window_size(1920, 1080)

    def tearDown(self) -> None:
        self.driver.quit()

    def test_fill_all_fields(self):
        driver = self.driver
        driver.get('https://demoqa.com/automation-practice-form')
        form_elements = driver.find_elements_by_xpath('//form//input[not(contains(@class, "form-control-file")) ]')
        form_elements[0].send_keys('Andrii')  # name
        form_elements[1].send_keys('Moisieiev')  # lastname
        form_elements[2].send_keys('testmail@gmail.com')  # email
        driver.find_element_by_xpath('//*[@id="genterWrapper"]/div[2]/div[1]/label').click()  # gender male
        form_elements[6].send_keys('1234567890')  # phone
        form_elements[7].send_keys(Keys.CONTROL, 'a')  # date
        form_elements[7].send_keys('10/08/1993')  # date
        form_elements[7].send_keys(Keys.ENTER)  # date
        form_elements[8].send_keys('Maths')  # subject
        form_elements[8].send_keys(Keys.TAB)
        driver.find_element_by_xpath('//*[@id="hobbiesWrapper"]/div[2]/div[1]/label').click()  # hibbies
        driver.find_element_by_id('currentAddress').send_keys('Не скажу!')  # address
        driver.find_element_by_id('state').click()  # state expand list
        driver.find_element_by_xpath('//*[@id="react-select-3-input"]').send_keys('NCR', Keys.ENTER)
        driver.find_element_by_id('city').click()  # city
        driver.find_element_by_xpath('//*[@id="react-select-4-input"]').send_keys('Delhi', Keys.ENTER)
        driver.find_element_by_id('submit').click()
        self.assertTrue(driver.find_element_by_css_selector('.modal-open'))




if __name__ == '__main__':
    unittest.main()
