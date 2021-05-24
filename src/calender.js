import React from "react";

const Calender = () =>{
    return(
        <div className="calender_section">
           <h4 className="Calender_heding">Calender</h4>
           <h2 className="Jan_2020">JAN 2020</h2>
 
 <div class="container">
  
 
    <div class="calendar">
 
      <table>
 
        <thead>
 
          <tr>
 
            <td>M</td>
            <td>T</td>
            <td>W</td>
            <td>T</td>
            <td>F</td>
            <td>S</td>
            <td>S</td>
 
          </tr>
 
        </thead>
 
        <tbody>
 
          <tr>
            <td class="prev-month">27</td>
            <td class="prev-month">28</td>
            <td class="prev-month">29</td>
            <td class="prev-month">30</td>
 
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
 
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td class="current-day ">8</td>
            <td >9</td>
            <td>10</td>
          </tr>
          <tr>
            <td>11</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td class="event_1">15</td>
            <td>16</td>
            <td>17</td>
          </tr>
          <tr>
 
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td >21</td>
            <td class="event_1">22</td>
            <td>23</td>
            <td>24</td>
          </tr>
 
          <tr>
 
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
            <td>31</td>
          </tr>
 
        </tbody>
 
      </table>
 
    </div>
 
  </div> 
</div> 


        
    );

};

export default Calender;